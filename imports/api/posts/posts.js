import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

export const Posts = new Mongo.Collection("posts");

new SimpleSchema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  content: { type: String, required: true },
  createdAt: { type: String, defaultValue: new Date() },
});

Meteor.methods({
  "posts.create"({ title, description, image, content }) {
    Posts.insert({
      title,
      description,
      image,
      content,
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
