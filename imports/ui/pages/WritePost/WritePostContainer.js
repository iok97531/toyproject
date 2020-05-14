import React from "react";
import { Meteor } from "meteor/meteor";
import WritePostPresenter from "./WritePostPresenter.js";

class WritePostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
      description: undefined,
      image: undefined,
      content: undefined,
    };
  }

  render() {
    return (
      <WritePostPresenter
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, image, content } = this.state;

    Meteor.call("posts.create", title, description, image, content, (error) => {
      if (error) {
        console.log(error.reason);
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      this.setState({
        [name]: undefined,
      });
    }
    this.setState({
      [name]: value,
    });
  };
}

export default WritePostContainer;
