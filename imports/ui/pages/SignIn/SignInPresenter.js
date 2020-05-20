import React from "react";
import { Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignInPresenter = (props) => {
  const { disabled, handleSubmit, handleChange } = props;
  return (
    <div>
      <form className={"signin-form"} onSubmit={handleSubmit}>
        <div className={"form__title"}>Sign In</div>

        <div className={"form__item"}>
          <span>Name or Email</span>
          <Input
            type="user"
            name="user"
            placeholder="Required field"
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <span>Password</span>
          <Input
            type="password"
            name="password"
            placeholder="Required field"
            onChange={handleChange}
          />
        </div>
        <div className={"form__button-container"}>
          <Button className={"ok-button"} disabled={disabled} type="submit">
            OK
          </Button>
          <Link to={"/"}>
            <Button className={"cancel-button"}>CANCEL</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignInPresenter;
