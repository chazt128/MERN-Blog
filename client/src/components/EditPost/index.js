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
  const { title, setTitle } = useState(post ? post.title : "");
  const { content, setContent } = useState(post ? post.content : "");
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
    dispatch(
      addPost({
        title,
        content
      })
    );
    // coming back to this later to only reset on success
    setTitle(post ? post.title : "");
    setContent(post ? post.content : "");
  };

  let isDisabled = title === "" || content === "";
  return (
    <div className="post-edit">
      <Button className="form-button" color="dark" onClick={toggle}>
        {buttonLabel}
      </Button>
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
                  {...bindTitle}
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
                  {...bindContent}
                  style={{ height: "200px" }}
                  required
                />
              </FormGroup>
              <Button
                className="form-button"
                type="submit"
                value="Submit"
                color="dark"
                onClick={toggle}
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
