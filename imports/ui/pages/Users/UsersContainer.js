import { withTracker } from "meteor/react-meteor-data";
import UsersPresenter from "./UsersPresenter.js";

const UsersContainer = withTracker(() => {
  return {};
})(UsersPresenter);

export default UsersContainer;
