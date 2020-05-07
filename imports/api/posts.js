import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Posts = new Mongo.Collection("posts");

Meteor.methods({
  "posts.insert"(title, text) {
    check(title, String);
    check(text, String);

    Posts.insert({
      title,
      text,
      createdAt: new Date(),
    });
  },
  "posts.delete"(postId) {
    check(postId, String);

    Posts.remove(postId);
  },
  "posts.update"() {},
  "posts.get"(postId) {
    check(postId, String);
  },
});
