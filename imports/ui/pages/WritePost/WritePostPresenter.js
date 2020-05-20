import React from "react";
import { Input, Button, TextArea, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const WritePostPresenter = (props) => {
  const { handleSubmit, handleChange, handleFileInput } = props;
  return (
    <div>
      <Form className={"write-post-form"} onSubmit={handleSubmit}>
        <div className={"form__item"}>
          <p>TITLE</p>
          <Input
            type="text"
            name="title"
            placeholder="Type..."
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <p>DESCRIPTION</p>
          <Input
            type="text"
            name="description"
            placeholder="Type..."
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <p>IMAGE</p>
          <Input
            type="file"
            name="image"
            placeholder="Upload image..."
            onChange={handleFileInput}
          />
          <Button>UPLOAD</Button>
        </div>
        <div className={"form__item"}>
          <p>TEXT</p>
          <TextArea
            type="text"
            name="content"
            placeholder="Type..."
            onChange={handleChange}
          />
        </div>
        <div className={"form__button-container"}>
          <Link to="/">
            <Button className={"cancel-button"}>CANCEL</Button>
          </Link>
          <Button type="submit" name="submit" className={"ok-button"}>
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default WritePostPresenter;
