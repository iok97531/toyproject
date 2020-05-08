import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Comments = new Mongo.Collection("posts");

Meteor.methods({
  "comments.create"(text) {
    check(text, String);
  },
  "comments.delete"() {},
});
