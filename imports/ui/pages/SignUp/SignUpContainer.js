import React from "react";
import { Meteor } from "meteor/meteor";
import SignUpPresenter from "./SignUpPresenter.js";
import { signUp } from "../../../api/users/methods.js";

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      username: "",
      phoneNumber: "",
    };
  }

  render() {
    const {
      email,
      password,
      passwordConfirm,
      username,
      phoneNumber,
    } = this.state;

    const disabled =
      email === "" ||
      password === "" ||
      passwordConfirm === "" ||
      username === "" ||
      phoneNumber === "";

    return (
      <SignUpPresenter
        disabled={disabled}
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

    if (email === "") {
      console.log("Email is required.");
      return null;
    }
    if (username === "") {
      console.log("Username is required.");
      return null;
    }
    if (password === "" || passwordConfirm === "") {
      console.log("Password is required.");
      return null;
    }
    if (password !== passwordConfirm) {
      console.log("Passwords does not match");
      return null;
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

    this.setState({
      [name]: value,
    });
  };
}

export default SignUpContainer;
