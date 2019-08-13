import { all } from "redux-saga/effects";
import loadPostsSaga from "./LoadPostsSaga";
import addPostSaga from "./AddPostSaga";
import updatePostSaga from "./UpdatePostSaga";
export default function* rootSaga() {
  yield all([loadPostsSaga(), addPostSaga(), updatePostSaga()]);
}
