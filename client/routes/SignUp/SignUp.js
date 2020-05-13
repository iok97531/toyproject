import React from "react";
import { Meteor } from "meteor/meteor";
import Header from "../../component/Header";
import { Input, Button } from "semantic-ui-react";
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      userName: "",
      phoneNumber: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        <form className={"signup-form"} onSubmit={this.handleSubmit}>
          <div className={"signup-form title"}>Sign Up</div>
          <div className={"signup-form item"}>
            <span>* Email</span>
            <Input
              type="email"
              name="email"
              placeholder="Required Field"
              onChange={this.handleChange}
            />
          </div>
          <div className={"signup-form item"}>
            <span>* Name</span>
            <Input
              type="text"
              name="userName"
              placeholder="Required Field"
              onChange={this.handleChange}
            />
          </div>
          <div className={"signup-form item"}>
            <span>* Password</span>
            <Input
              type="password"
              name="password"
              placeholder="Required Field"
              onChange={this.handleChange}
            />
          </div>

          <div className={"signup-form item"}>
            <span>* Confirm password</span>
            <Input
              type="password"
              name="passwordConfirm"
              placeholder="Required Field"
              onChange={this.handleChange}
            />
          </div>

          <div className={"signup-form item"}>
            <span>Phone number</span>
            <Input
              type="text"
              name="phoneNumber"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      email,
      password,
      passwordConfirm,
      userName,
      phoneNumber,
    } = this.state;

    if (password !== passwordConfirm) {
      throw new Meteor.Error("Password does not match");
    }

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
