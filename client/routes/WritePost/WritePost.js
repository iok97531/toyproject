import React from "react";
import { Meteor } from "meteor/meteor";
import Header from "../../component/Header";
import { Input, Button, TextArea, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class WritePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image: "",
      text: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Form className={"write-post-form"} onSubmit={this.handleSubmit}>
          <div className={"write-post-form item"}>
            <p>TITLE</p>
            <Input
              type="text"
              name="title"
              placeholder="Type..."
              onChange={this.handleChange}
            />
          </div>
          <div className={"write-post-form item"}>
            <p>DESCRIPTION</p>
            <Input
              type="text"
              name="description"
              placeholder="Type..."
              onChange={this.handleChange}
            />
          </div>
          <div className={"write-post-form item"}>
            <p>IMAGE</p>
            <Input type="img" name="image" onChange={this.handleChange} />
            <Button>UPLOAD</Button>
          </div>
          <div className={"write-post-form item"}>
            <p>TEXT</p>
            <TextArea
              type="text"
              name="text"
              placeholder="Type..."
              onChange={this.handleChange}
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
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, image, text } = this.state;

    Meteor.call("posts.create", title, description, image, text, (error) => {
      if (error) {
        console.log(error.reason);
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
}

export default WritePost;
