import { POSTS } from "../../constants";

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case POSTS.POST_FAILURE:
      return payload.error;
    case POSTS.LOAD:
    case POSTS.POST_SUCCESS:
    case POSTS.POST_SUCCESS_MESSAGE:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
