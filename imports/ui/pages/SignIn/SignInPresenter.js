import React from "react";
import { Input, Button } from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const SignInPresenter = (props) => {
  const { handleSubmit, handleChange } = props;
  return (
    <div>
      <Header />
      <form className={"signin-form"} onSubmit={handleSubmit}>
        <div className={"signin-form title"}>Log In</div>

        <div className={"signin-form item"}>
          <span>Name or Email</span>
          <Input
            type="user"
            name="user"
            placeholder="Required Field"
            onChange={handleChange}
          />
        </div>
        <div className={"signin-form item"}>
          <span>Password</span>
          <Input
            type="password"
            name="password"
            placeholder="Required Field"
            onChange={handleChange}
          />
        </div>
        <div className={"signin-form item"}>
          <Link to={"/"}>
            <Button className={"signin-form__item cancel-button"}>
              CANCEL
            </Button>
          </Link>
          <Button className={"signin-form__item ok-button"} type="submit">
            OK
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInPresenter;
