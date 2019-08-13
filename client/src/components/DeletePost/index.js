import React from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions";

const DeletePost = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Button type="button" color="dark" onClick={() => dispatch(deletePost(id))}>
      Delete
    </Button>
  );
};
export default DeletePost;
