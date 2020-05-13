import React from "react";
import { Form, TextArea, Button } from "semantic-ui-react";

const CommentFormPresenter = (props) => (
  <Form className={"comment-form"} onSubmit={props.onSubmit}>
    <TextArea
      type="text"
      name="text"
      placeholder={"Leave comments..."}
      onChange={props.onChange}
    />
    <Button type="submit" name="submit">
      SUBMIT
    </Button>
  </Form>
);
export default CommentFormPresenter;
