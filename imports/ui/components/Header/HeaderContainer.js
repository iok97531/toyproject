import { withTracker } from "meteor/react-meteor-data";
import HeaderPresenter from "./HeaderPresenter.js";

const HeaderContainer = withTracker(() => {
  user = Meteor.user();
  return {
    user,
  };
})(HeaderPresenter);

export default HeaderContainer;
