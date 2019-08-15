import { take, fork, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { checkServer, updatePost } from "../../api";
import { loadPosts, setError, setMessage, setPostChanged } from "../actions";

function* handleUpdatePost(post) {
  try {
    yield call(checkServer);
    yield call(updatePost, post);
    yield put(loadPosts());
    yield put(setMessage("Journal entry successfully updated"));
    yield put(setPostChanged(true));
  } catch (e) {
    yield put(setError(e.toString()));
  }
}

export default function* watchUpdatePost() {
  while (true) {
    const { payload } = yield take(POSTS.UPDATE);
    yield fork(handleUpdatePost, payload.post);
  }
}
