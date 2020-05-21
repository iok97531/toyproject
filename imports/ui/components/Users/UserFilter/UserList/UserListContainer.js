import { withTracker } from "meteor/react-meteor-data";
import UserListPresenter from "./UserListPresenter.js";

const UserListContainer = withTracker(({ filterText, handleClick }) => {
  Meteor.subscribe("users");
  return {
    users: Meteor.users.find().fetch(),
    filterText,
    handleClick,
  };
})(UserListPresenter);

export default UserListContainer;
