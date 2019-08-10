export const fetchPosts = async () => {
  const res = await fetch("/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await res.json();
  console.log(data);
  if (data.status !== 200) {
    throw new Error(data);
  }
  return data;
};
