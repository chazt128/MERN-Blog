import React from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import EditPost from "./components/EditPost";
const createButtonLabel = (
  <>
    <span className="plus" role="img" aria-label="plus">
      &#43;
    </span>
    Journal Entry
  </>
);
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <EditPost buttonLabel={createButtonLabel} />
        <PostList />
      </div>
    </div>
  );
};
export default App;
