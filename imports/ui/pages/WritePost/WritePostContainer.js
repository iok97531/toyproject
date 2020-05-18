import React from "react";
import { Meteor } from "meteor/meteor";
import WritePostPresenter from "./WritePostPresenter.js";

class WritePostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      description: null,
      image: null,
      content: null,
      selectedImage: null,
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

    if (value === "") {
      this.setState({
        [name]: null,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, image, content } = this.state;

    Meteor.call("posts.create", title, description, image, content, (error) => {
      if (error) {
        console.log(error.reason);
      }
    });
  };
}

export default WritePostContainer;
