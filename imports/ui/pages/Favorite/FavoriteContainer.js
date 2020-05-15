import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts.js";
import FavoritePresenter from "./FavoritePresenter.js";

const FavoriteContainer = withTracker(() => {
  if (!Meteor.user()) {
    return null;
  }
  Meteor.subscribe("posts");
  posts = [];
  const favIds = Meteor.user().profile.favPostIds;
  for (i = 0; i < favIds.length; i++) {
    post = Posts.find({ _id: favIds[i] }).fetch()[0];
    if (post) {
      posts.push(post);
    }
  }
  return {
    posts,
  };
})(FavoritePresenter);

export default FavoriteContainer;
