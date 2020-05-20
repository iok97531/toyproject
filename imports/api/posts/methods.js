import { check } from "meteor/check";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { Posts } from "./posts.js";
import { Comments } from "../comments/comments.js";

Meteor.methods({
  "posts.create"(title, description, image, content) {
    Posts.insert({
      title,
      description,
      image,
      content,
      numLikes: 0,
      numComments: 0,
      comments: [],
      userName: Meteor.user().username,
      userId: this.userId,
      createdAt: new Date(),
    });
  },
  "posts.delete"(postId) {
    check(postId, String);
    Comments.remove({ postId });
    Posts.remove(postId);
  },
  "posts.update"() {},
});
