import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import ProfilePresenter from "./ProfilePresenter.js";

const ProfileContainer = withTracker(() => {
  return {
    user: Meteor.user(),
  };
})(ProfilePresenter);
export default ProfileContainer;
