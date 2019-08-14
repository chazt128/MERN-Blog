import { POSTS } from "../../constants";

const requestSuccessReducer = (state = false, { type, payload }) => {
  if (type === POSTS.POST_REQUEST_SUCCESS) return payload.success;
  return state;
};

export default requestSuccessReducer;
