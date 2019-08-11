import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions";
import { useInput } from "../hooks";
import "./styles.css";

const CreatePost = () => {
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: content, bind: bindContent, reset: resetContent } = useInput(
    ""
  );
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addPost({
        title,
        content
      })
    );
    resetTitle();
    resetContent();
  };

  return (
    <div className="form">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Type your Title..."
            {...bindTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            type="textarea"
            name="text"
            id="content"
            placeholder="Type your content..."
            {...bindContent}
          />
        </FormGroup>
        <Button type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
