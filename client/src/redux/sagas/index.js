import postsSaga from "./PostsSaga";
export default function* rootSaga() {
  yield postsSaga();
}
