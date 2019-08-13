import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addPost, updatePost } from "../../redux/actions";
import "./styles.css";

const EditPost = props => {
  const { buttonLabel, post } = props;

  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    setOpen(!open);
    if (open) {
      setTitle(post ? post.title : "");
      setContent(post ? post.content : "");
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (post) {
      dispatch(
        updatePost({
          _id: post._id,
          title,
          content
        })
      );
    } else {
      dispatch(
        addPost({
          title,
          content
        })
      );
    }
    // coming back to this later to only reset on success
    toggle();
    setTitle(post ? post.title : "");
    setContent(post ? post.content : "");
  };

  let isDisabled = title === "" || content === "";
  return (
    <div className="post-edit">
      {post ? (
        <div className="update-button" onClick={toggle}>
          {buttonLabel}
        </div>
      ) : (
        <Button className="add-button" color="dark" onClick={toggle}>
          {buttonLabel}
        </Button>
      )}
      <Modal isOpen={open}>
        <ModalBody>
          <div className="form">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="title">
                  <b>Title</b>
                </Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  bsSize="lg"
                  placeholder="Type your Title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="content">
                  <b>Content</b>
                </Label>
                <Input
                  type="textarea"
                  name="text"
                  id="content"
                  placeholder="Type your content..."
                  bsSize="lg"
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  style={{ height: "400px" }}
                  required
                />
              </FormGroup>
              <Button
                className="form-button"
                type="submit"
                value="Submit"
                color="dark"
                disabled={isDisabled}
              >
                Submit
              </Button>
              <Button
                className="form-button"
                type="button"
                color="dark"
                onClick={toggle}
              >
                Cancel
              </Button>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditPost;
