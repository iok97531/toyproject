import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

export const Comments = new Mongo.Collection("comments");

Comments.schema = new SimpleSchema({
  postId: { type: String },
  content: { type: String },
  userId: { type: String },
  createdAt: { type: String, defaultValue: new Date() },
});

Meteor.methods({
  "comments.create"(content, postId) {
    Comments.insert({
      postId,
      content,
      userId: this.userId,
      createdAt: new Date(),
    });
  },
  "comments.delete"() {},
});
