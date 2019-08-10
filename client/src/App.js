import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../src/redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const error = useSelector(state => state.error);

  useEffect(() => {
    console.log("mounted");
    dispatch(loadPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts.length]);

  return (
    <div className="App">
      {posts.length > 0 &&
        posts.map(post => <div key={post._id}>{post.title}</div>)}
      {error && <p>{error}</p>}
    </div>
  );
};
export default App;
