import { all } from "redux-saga/effects";
import loadPostsSaga from "./LoadPostsSaga";
import addPostSaga from "./AddPostSaga";
export default function* rootSaga() {
  yield all([loadPostsSaga(), addPostSaga()]);
}
