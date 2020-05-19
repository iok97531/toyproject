import PostCardPresenter from "./PostCardPresenter.js";
import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../../../api/posts/posts.js";

const PostCardContainer = withTracker(({ postId }) => {
  Meteor.subscribe("post", postId);
  const post = Posts.find({ _id: postId }).fetch()[0];
  if (post) {
    return {
      postId,
      title: post.title,
      description: post.description,
      numLikes: post.numLikes,
      numComments: post.numComments,
    };
  }
})(PostCardPresenter);

export default PostCardContainer;
