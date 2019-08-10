import React, { useEffect } from "react";
import logo from "./logo.svg";
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
  console.log(posts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {posts.length > 0 &&
          posts.map(post => <div key={post._id}>{post.title}</div>)}
        {error && <p>{error}</p>}
      </header>
    </div>
  );
};
export default App;
