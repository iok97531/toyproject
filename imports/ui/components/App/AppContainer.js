import { withTracker } from "meteor/react-meteor-data";
import AppPresenter from "./AppPresenter.js";

const AppContainer = withTracker(() => {
  return {
    user: Meteor.userId(),
  };
})(AppPresenter);

export default AppContainer;
