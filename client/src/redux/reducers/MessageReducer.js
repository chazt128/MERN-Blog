import { POSTS } from "../../constants";

const messageReducer = (state = null, { type, payload }) => {
  if (type === POSTS.POST_SUCCESS_MESSAGE) return payload.message;
  return state;
};

export default messageReducer;
