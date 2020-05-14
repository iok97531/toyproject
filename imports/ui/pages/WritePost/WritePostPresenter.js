import React from "react";
import Header from "../../components/Header";
import { Input, Button, TextArea, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const WritePostPresenter = (props) => {
  const { handleSubmit, handleChange } = props;
  return (
    <div>
      <Header />
      <Form className={"write-post-form"} onSubmit={handleSubmit}>
        <div className={"write-post-form item"}>
          <p>TITLE</p>
          <Input
            type="text"
            name="title"
            placeholder="Type..."
            onChange={handleChange}
          />
        </div>
        <div className={"write-post-form item"}>
          <p>DESCRIPTION</p>
          <Input
            type="text"
            name="description"
            placeholder="Type..."
            onChange={handleChange}
          />
        </div>
        <div className={"write-post-form item"}>
          <p>IMAGE</p>
          <Input type="img" name="image" onChange={handleChange} />
          <Button>UPLOAD</Button>
        </div>
        <div className={"write-post-form item"}>
          <p>TEXT</p>
          <TextArea
            type="text"
            name="content"
            placeholder="Type..."
            onChange={handleChange}
          />
        </div>
        <div className={"write-post-form button-container"}>
          <Link to="/">
            <Button>CANCEL</Button>
          </Link>
          <Button type="submit" name="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default WritePostPresenter;
