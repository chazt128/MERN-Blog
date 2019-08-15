import { POSTS } from "../../constants";

const messageReducer = (state = null, { type, payload }) => {
  switch (type) {
    case POSTS.POST_SUCCESS_MESSAGE:
      return payload.message;
    case POSTS.POST_FAILURE:
      return null;
    default:
      return state;
  }
};

export default messageReducer;
