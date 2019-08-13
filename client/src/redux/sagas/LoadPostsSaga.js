import { takeEvery, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { fetchPosts } from "../../api";
import { setPosts, setError, setMessage } from "../actions";

function* handlePostsFetch() {
  console.log("fetching posts");
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
    // yield put(setMessage("Loaded posts successfully"));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchPostLoad() {
  console.log("waiting for load");
  yield takeEvery(POSTS.LOAD, handlePostsFetch);
}
