import React from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
};
export default App;
