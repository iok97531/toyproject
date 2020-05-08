import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import AppPresenter from "./AppPresenter";

const App = withTracker(() => {
  const userHandle = Meteor.subscribe("userData");
  const loading = userHandle.ready();
  return {
    loading,
    user: Meteor.user(),
  };
})(AppPresenter);

export default App;
