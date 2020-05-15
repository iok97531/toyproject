import React from "react";
import { Input, Button } from "semantic-ui-react";

const SignUpPresenter = (props) => {
  const { handleSubmit, handleChange } = props;
  return (
    <div>
      <form className={"signup-form"} onSubmit={handleSubmit}>
        <div className={"signup-form title"}>Sign Up</div>
        <div className={"signup-form item"}>
          <span>* Email</span>
          <Input
            type="email"
            name="email"
            placeholder="Required Field"
            onChange={handleChange}
          />
        </div>
        <div className={"signup-form item"}>
          <span>* Name</span>
          <Input
            type="text"
            name="username"
            placeholder="Required Field"
            onChange={handleChange}
          />
        </div>
        <div className={"signup-form item"}>
          <span>* Password</span>
          <Input
            type="password"
            name="password"
            placeholder="Required Field"
            onChange={handleChange}
          />
        </div>

        <div className={"signup-form item"}>
          <span>* Confirm password</span>
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Required Field"
            onChange={handleChange}
          />
        </div>

        <div className={"signup-form item"}>
          <span>Phone number</span>
          <Input type="text" name="phoneNumber" onChange={handleChange} />
        </div>
        <div>
          <Button type="submit">SUBMIT</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPresenter;
