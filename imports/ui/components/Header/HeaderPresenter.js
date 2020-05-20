import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = (props) => {
  if (props.user === undefined) {
    return <header></header>;
  }
  return (
    <header>
      <Link to={"/"}>
        <span className={"title"}>[Harry] Toy Project</span>
      </Link>
      {props.user ? (
        <div>
          <Link to={"/profile"}>
            <span className={"user-name"}>{props.user.username}</span>
          </Link>
          <div className={"button-container"}>
            <Link to={"/write"}>
              <Button>WRITE</Button>
            </Link>
            <Link to={"/favorite"}>
              <Button>FAVORITE</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={"button-container"}>
          <Link to={"/signin"}>
            <Button>Sign In</Button>
          </Link>
          <Link to={"/signup"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
