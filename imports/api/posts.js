import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Posts = new Mongo.Collection("posts");

Meteor.methods({
  "posts.create"(title, description, image, text) {
    check(title, String);
    check(description, String);
    check(image, String);
    check(text, String);

    Posts.insert({
      title,
      text,
      description,
      image,
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
