import React from "react";
import { Meteor } from "meteor/meteor";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userName: "",
      phoneNumber: "",
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>email</p>
        <input type="email" name="email" onChange={this.handleChange} />
        <p>password</p>
        <input type="password" name="password" onChange={this.handleChange} />
        <p>user name</p>
        <input type="text" name="userName" onChange={this.handleChange} />
        <p>phone number</p>
        <input type="text" name="phoneNumber" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, userName, phoneNumber } = this.state;

    Meteor.call(
      "users.signUp",
      email,
      password,
      userName,
      phoneNumber,
      (error) => {
        if (error) {
          console.log(error.reason);
        }
      }
    );
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
}

export default SignUp;
