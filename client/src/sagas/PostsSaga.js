import { takeEvery, call, put } from "redux-saga/effects";
import { POSTS } from "../constants";
import { fetchPosts } from "../api";
import {
  setPosts,
  setError,
  addPost,
  updatePost,
  deletePost
} from "../redux/actions";

function* handlePostsFetch() {
  try {
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchPostLoad() {
  yield takeEvery(POSTS.LOAD, handlePostsFetch);
}
