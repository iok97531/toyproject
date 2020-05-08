import React from "react";
import { Meteor } from "meteor/meteor";

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
      <form onSubmit={this.handleSubmit}>
        <p>title</p>
        <input type="text" name="title" onChange={this.handleChange} />
        <p>description</p>
        <input type="text" name="description" onChange={this.handleChange} />
        <p>image</p>
        <input type="text" name="image" onChange={this.handleChange} />
        <p>text</p>
        <input type="text" name="text" onChange={this.handleChange} />
        <input type="submit" name="submit" />
      </form>
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
