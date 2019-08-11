import { take, fork, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { createPost } from "../../api";
import { loadPosts, setError } from "../actions";

function* handleAddPost(post) {
  try {
    yield call(createPost, post);
    yield put(loadPosts());
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchPostLoad() {
  while (true) {
    const { payload } = yield take(POSTS.ADD_POST);
    yield fork(handleAddPost, payload.post);
  }
}
