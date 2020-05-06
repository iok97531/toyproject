import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Posts = new Mongo.collection("posts");

Meteor.methods({
  "posts.insert"(title, text) {
    check(title, string);
    check(text, string);

    Posts.insert({
      title,
      text,
      createdAt: new Date(),
    });
  },
  "posts.delete"(postId) {
    check(postId, string);

    Posts.remove(postId);
  },
  "posts.update"() {},
  "posts.get"(postId) {
    check(postId, string);
  },
});
