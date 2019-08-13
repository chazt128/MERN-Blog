import { POSTS } from "../../constants";

export const loadPosts = () => ({
  type: POSTS.LOAD
});

export const setPosts = posts => ({
  type: POSTS.POST_SUCCESS,
  payload: {
    posts
  }
});

export const setQueryMessage = message => ({
  type: POSTS.POST_SUCCESS,
  payload: {
    message
  }
});

export const setError = error => ({
  type: POSTS.POST_FAILURE,
  payload: {
    error
  }
});

export const addPost = post => ({
  type: POSTS.ADD,
  payload: {
    post
  }
});

export const updatePost = post => ({
  type: POSTS.UPDATE,
  payload: {
    post
  }
});

export const deletePost = id => ({
  type: POSTS.DELETE,
  payload: {
    id
  }
});
