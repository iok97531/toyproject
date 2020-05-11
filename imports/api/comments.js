import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Comments = new Mongo.Collection("comments");

if (Meteor.isServer) {
  Meteor.publish("comments", () => {
    return Comments.find();
  });
}

Meteor.methods({
  "comments.create"(text, postId) {
    check(text, String);
    check(postId, String);

    Comments.insert({
      postId,
      userId: Meteor.userId(),
      text,
      createdAt: new Date(),
    });
  },
  "comments.delete"() {},
});
