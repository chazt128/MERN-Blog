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
  return data;
};

export const createPost = async () => {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
