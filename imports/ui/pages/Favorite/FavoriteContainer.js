import { withTracker } from "meteor/react-meteor-data";
import FavoritePresenter from "./FavoritePresenter.js";

const FavoriteContainer = withTracker(() => {
  if (!Meteor.user()) {
    return null;
  }
  return {
    posts: Meteor.user().profile.favoritePosts,
  };
})(FavoritePresenter);

export default FavoriteContainer;
