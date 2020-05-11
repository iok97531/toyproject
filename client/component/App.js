import React from "react";
import AppPresenter from "./AppPresenter";
import { withTracker } from "meteor/react-meteor-data";

const App = withTracker(() => {
  return {
    user: Meteor.userId(),
  };
})(AppPresenter);
export default App;
