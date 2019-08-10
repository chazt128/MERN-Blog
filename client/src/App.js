import React from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <PostList />
      </div>
    </div>
  );
};
export default App;
