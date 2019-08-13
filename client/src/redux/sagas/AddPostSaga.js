import { take, fork, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { createPost } from "../../api";
import { loadPosts, setError, setMessage } from "../actions";

function* handleAddPost(post) {
  try {
    const status = yield call(createPost, post);
    console.log("add status", status);
    yield put(loadPosts());
    yield put(setMessage("Journal entry successfully created"));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchPostLoad() {
  while (true) {
    const { payload } = yield take(POSTS.ADD);
    yield fork(handleAddPost, payload.post);
  }
}
