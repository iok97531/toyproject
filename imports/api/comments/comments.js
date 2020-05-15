import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

export const Comments = new Mongo.Collection("comments");

Comments.schema = new SimpleSchema({
  postId: { type: String },
  content: { type: String },
  userName: { type: String },
  createdAt: { type: String, defaultValue: new Date() },
});

Meteor.methods({
  "comments.create"(content, postId) {
    Comments.insert({
      postId,
      content,
      userName: Meteor.user().username,
      createdAt: new Date(),
    });
  },
  "comments.delete"() {},
});
