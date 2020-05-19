import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

const CommentFormPresenter = ({ value, handleSubmit, handleChange }) => (
  <Form className={"comment-form"} onSubmit={handleSubmit}>
    <TextArea
      type="text"
      name="commentText"
      value={value}
      disabled={!Meteor.userId()}
      placeholder={"Leave comments..."}
      onChange={handleChange}
    />
    <Button type="submit" name="submit">
      SUBMIT
    </Button>
  </Form>
);
export default CommentFormPresenter;
