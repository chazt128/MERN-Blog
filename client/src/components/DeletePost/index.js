import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions";
import "./styles.css";

const DeletePost = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div className="delete-button" onClick={() => dispatch(deletePost(id))}>
      Delete
    </div>
  );
};
export default DeletePost;
