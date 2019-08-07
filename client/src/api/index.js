export const fetchPosts = async () => {
  const res = await fetch("/posts");
  const data = await res.json();
  console.log(data);
  if (data.status >= 400) {
    throw new Error(data);
  }

  return data;
};
