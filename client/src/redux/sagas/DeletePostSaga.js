import { take, fork, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { deletePost } from "../../api";
import { loadPosts, setError, setMessage, setPostChanged } from "../actions";

function* handleDeletePost(id) {
  try {
    yield call(deletePost, id);
    yield put(loadPosts());
    yield put(setMessage("Journal entry successfully deleted"));
    yield put(setPostChanged(true));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchDeletePost() {
  while (true) {
    const { payload } = yield take(POSTS.DELETE);
    yield fork(handleDeletePost, payload.id);
  }
}
