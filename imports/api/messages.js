import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Messages = new Mongo.Collection("messages");

Meteor.methods({
  "messages.create"(text) {
    check(text, String);

    Messages.insert({
      text,
      userId: Meteor.userId(),
      createdAt: new Date(),
    });
  },
});
