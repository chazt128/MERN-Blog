import { combineReducers } from "redux";
import error from "./ErrorReduecer";
import loading from "./LoadingReducer";
import posts from "./PostsReducer";
import message from "./MessageReducer";
import requestSuccess from "./RequestSuccessReducer";
export default combineReducers({
  posts,
  loading,
  error,
  message,
  requestSuccess
});
