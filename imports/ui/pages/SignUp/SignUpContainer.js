import React from "react";
import { Meteor } from "meteor/meteor";
import SignUpPresenter from "./SignUpPresenter.js";
import { signUp } from "../../../api/users/methods.js";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
      passwordConfirm: undefined,
      username: undefined,
      phoneNumber: undefined,
    };
  }

  render() {
    return (
      <SignUpPresenter
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
      passwordConfirm,
      username,
      phoneNumber,
    } = this.state;

    if (password !== passwordConfirm) {
      throw new Meteor.Error("Password Error", "Passwords does not match");
    }

    signUp.call({ email, password, username, phoneNumber }, (error, result) => {
      if (error) {
        console.log(error.reason);
      }
      if (result) {
        Meteor.loginWithPassword(username, password, (error) => {
          if (error) {
            console.log(error.reason);
          }
        });
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      this.setState({
        [name]: undefined,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
}

export default SignUpContainer;
