import React from "react";
import { Input, Button } from "semantic-ui-react";

const SignUpPresenter = (props) => {
  const { disabled, handleSubmit, handleChange } = props;
  return (
    <div>
      <form className={"signup-form"} onSubmit={handleSubmit}>
        <div className={"form__title"}>Sign Up</div>
        <div className={"form__item"}>
          <span>* Email</span>
          <Input
            type="email"
            name="email"
            placeholder="Required field"
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <span>* Name</span>
          <Input
            type="text"
            name="username"
            placeholder="Required field"
            onChange={handleChange}
          />
        </div>
        <div className={"form__item"}>
          <span>* Password</span>
          <Input
            type="password"
            name="password"
            placeholder="Required field"
            onChange={handleChange}
          />
        </div>

        <div className={"form__item"}>
          <span>* Confirm password</span>
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Required field"
            onChange={handleChange}
          />
        </div>

        <div className={"form__item"}>
          <span>* Phone number</span>
          <Input
            type="text"
            name="phoneNumber"
            placeholder="Requied field"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit" disabled={disabled}>
            SUBMIT
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPresenter;
