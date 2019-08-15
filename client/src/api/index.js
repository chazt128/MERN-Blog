export const checkServer = async () => {
  const res = await fetch("/api/server", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { status } = await res.json();
  if (status === 0 || status === 3) {
    throw new Error(`server error`);
  }
};

export const fetchPosts = async () => {
  const res = await fetch("/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  if (data.status > 400) {
    throw new Error("failed to fetch posts");
  }
  return data.reverse();
};

export const createPost = async post => {
  const res = fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const { status } = await res;
  if (status > 400) {
    throw new Error("failed to create post");
  }
};

export const updatePost = async post => {
  const res = fetch(`/api/posts/${post._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const { status } = await res;
  if (status > 400) {
    throw new Error("failed to update post");
  }
};

export const deletePost = async id => {
  const res = fetch(`/api/posts/${id}`, {
    method: "DELETE"
  });
  const { status } = await res;
  if (status > 400) {
    throw new Error("failed to delete post");
  }
};
