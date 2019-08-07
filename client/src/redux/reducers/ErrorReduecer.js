import { POSTS } from "../../constants";

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case POSTS.LOAD_FAILURE:
      return payload.error;
    case POSTS.LOAD:
    case POSTS.LOAD_SUCCESS:
    default:
      return state;
  }
};

export default errorReducer;
