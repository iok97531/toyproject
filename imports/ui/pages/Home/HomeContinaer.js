import { withTracker } from "meteor/react-meteor-data";
import HomePresenter from "./HomePresenter.js";
import { Posts } from "../../../api/posts/posts";

const HomeContainer = withTracker(() => {
  Meteor.subscribe("posts");
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(HomePresenter);

export default HomeContainer;
