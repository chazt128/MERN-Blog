export const fetchPosts = async () => {
  const res = await fetch("/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(data);
  if (data.status > 400) {
    throw new Error(data);
  }
  // data.sort((a, b) => new Date(b.date) - new Date(a.date));
  return data.reverse();
};

export const createPost = async post => {
  console.log("attempting to add", post);
  const res = fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const data = await res;
  console.log(data);
  if (data.status > 400) {
    throw new Error(data);
  }
  return data;
};

export const updatePost = async post => {
  console.log("updating", post);
  const res = fetch(`/api/posts/${post._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });
  const data = await res;
  console.log(data);
  if (data.status > 400) {
    throw new Error(data);
  }
  return data;
};
