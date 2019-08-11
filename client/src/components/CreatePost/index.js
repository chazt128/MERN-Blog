import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/actions";
import "./styles.css";
const CreatePost = () => (
  <div className="form">
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Title..." />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="textarea"
          name="text"
          id="content"
          placeholder="Type your content..."
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  </div>
);

export default CreatePost;
