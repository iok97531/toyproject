import React from "react";
import { Input, Button, Form } from "semantic-ui-react";

const ProfilePresenter = ({
  user,
  handleChange,
  handleUpdate,
  handleLogOut,
}) => {
  if (!user) {
    return null;
  }
  const { username, emails, profile } = user;
  return (
    <div>
      <h1>Profile</h1>
      <Form className={"profile-form"}>
        <div className={"form__item"}>
          <span>Email</span>
          <Input value={emails[0].address} disabled={true} />
        </div>
        <div className={"form__item"}>
          <span>Name</span>
          <Input value={username} disabled={true} />
        </div>
        <div className={"form__item"}>
          <span>New password</span>
          <Input
            type="password"
            name="password"
            placeholder={"Required field"}
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <span>Comfirm new password</span>
          <Input
            type="password"
            name="confirmPassword"
            placeholder={"Required field"}
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <span>Phone number</span>
          <Input
            type="text"
            name="phoneNumber"
            defaultValue={profile.phoneNumber}
            placeholder={"Required field"}
            onChange={handleChange}
          />
        </div>
        <div className={"form__button-container"}>
          <Button
            type="submit"
            className="update-button"
            onClick={handleUpdate}
          >
            UPDATE
          </Button>
          <Button className="logout-button" onClick={handleLogOut}>
            LogOut
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfilePresenter;
