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
        <Button type="submit" value="Submit" color="dark">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
