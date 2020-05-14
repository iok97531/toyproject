import React from "react";
import { Meteor } from "meteor/meteor";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to={"/"}>
      <span className={"title"}>[Harry] Toy Project</span>
    </Link>
    {Meteor.user() ? (
      <div>
        <Link to={"/profile"}>
          <span className={"user-name"}>{Meteor.user().username}</span>
        </Link>
        <div className={"button-container"}>
          <Link to={"/write"}>
            <Button>WRITE POST</Button>
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

export default Header;
