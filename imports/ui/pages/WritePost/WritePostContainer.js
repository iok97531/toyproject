import React from "react";
import { Meteor } from "meteor/meteor";
import WritePostPresenter from "./WritePostPresenter.js";

class WritePostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      image: "",
      content: "",
      selectedImage: "",
    };
  }

  render() {
    return (
      <WritePostPresenter
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleFileInput={this.handleFileInput}
      />
    );
  }

  handleFileInput = (event) => {
    this.setState({
      selectedImage: event.target.files[0],
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, image, content } = this.state;

    if (title === "") {
      console.log("Title is required");
      return null;
    }
    if (content === "") {
      console.log("Content is required");
      return null;
    }

    Meteor.call("posts.create", title, description, image, content, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        this.props.history.push("/");
      }
    });
  };
}

export default WritePostContainer;
