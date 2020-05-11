import { Meteor } from "meteor/meteor";
import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      password: "",
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>user</p>
        <input type="user" name="user" onChange={this.handleChange} />
        <p>password</p>
        <input type="password" name="password" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { user, password } = this.state;

    Meteor.loginWithPassword(user, password, (error) => {
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
export default SignIn;
