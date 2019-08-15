import { take, fork, call, put } from "redux-saga/effects";
import { POSTS } from "../../constants";
import { checkServer, createPost } from "../../api";
import { loadPosts, setError, setMessage, setPostChanged } from "../actions";

function* handleAddPost(post) {
  try {
    yield call(checkServer);
    yield call(createPost, post);
    yield put(loadPosts());
    yield put(setMessage("Journal entry successfully created"));
    yield put(setPostChanged(true));
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
