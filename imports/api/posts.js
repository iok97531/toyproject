import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Posts = new Mongo.Collection("posts");

if (Meteor.isServer) {
  Meteor.publish("posts", () => {
    return Posts.find();
  });
  Meteor.publish("post", (_id) => {
    return Posts.find(_id);
  });
}

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
});
