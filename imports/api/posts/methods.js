import { check } from "meteor/check";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { Posts } from "./posts.js";

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
      createdAt: new Date(),
    });
  },
  "posts.delete"(postId) {
    check(postId, String);

    Posts.remove(postId);
  },
  "posts.update"() {},
});
