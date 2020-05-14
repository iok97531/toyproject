import { Meteor } from "meteor/meteor";
import React from "react";
import { Input, Button } from "semantic-ui-react";
import Header from "../../components/Header";

class ProfilePresenter extends React.Component {
  render() {
    if (!this.props.user) {
      return null;
    }
    const { username, emails, profile } = this.props.user;
    return (
      <div>
        <Header />
        <h1>Profile</h1>
        <div className={"profile-form"}>
          <div className={"profile-form__item"}>
            <span>Email</span>
            <Input value={emails[0].address} />
          </div>
          <div className={"profile-form__item"}>
            <span>Name</span>
            <Input value={username} />
          </div>
          <div className={"profile-form__item"}>
            <span>New password</span>
            <Input placeholder={"Required Field"} />
          </div>
          <div className={"profile-form__item"}>
            <span>Comfirm new password</span>
            <Input placeholder={"Required Field"} />
          </div>
          <div className={"profile-form__item"}>
            <span>Phone number</span>
            <Input value={profile.phonenumber} />
          </div>
          <Button onClick={this.handleClick}>LogOut</Button>
        </div>
      </div>
    );
  }

  handleClick = () => {
    Meteor.logout();
  };
}

export default ProfilePresenter;
