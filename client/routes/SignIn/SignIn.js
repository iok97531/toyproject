import { Meteor } from "meteor/meteor";
import React from "react";
import { Input, Button } from "semantic-ui-react";
import Header from "../../component/Header";

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
      <div>
        <Header>header</Header>
        <form className={"signin-form"} onSubmit={this.handleSubmit}>
          <div className={"signin-form title"}>Log In</div>

          <div className={"signin-form__item"}>
            <span>Name or Email</span>
            <Input
              type="user"
              name="user"
              placeholder="Required Field"
              onChange={this.handleChange}
            />
          </div>
          <div className={"signin-form__item"}>
            <span>Password</span>
            <Input
              type="password"
              name="password"
              placeholder="Required Field"
              onChange={this.handleChange}
            />
          </div>
          <div className={"signin-form__item"}>
            <Button className={"signin-form__item cancel-button"} type="submit">
              Cancel
            </Button>
            <Button className={"signin-form__item ok-button"} type="submit">
              OK
            </Button>
          </div>
        </form>
      </div>
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
