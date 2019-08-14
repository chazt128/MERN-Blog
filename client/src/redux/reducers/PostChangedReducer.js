import { POSTS } from "../../constants";

const postChanged = (state = false, { type, payload }) => {
  if (type === POSTS.POST_CHANGED) return payload.success;
  return state;
};

export default postChanged;
