import { takeEvery, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { fetchPosts } from "../../api";
import { setPosts, setError } from "../actions";

function* handlePostsFetch() {
  console.log("fetching posts");
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchPostLoad() {
  console.log("waiting for load");
  yield takeEvery(POSTS.LOAD, handlePostsFetch);
}
