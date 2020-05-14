import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { ValidatedMethod } from "meteor/mdg:validated-method";

export const Messages = new Mongo.Collection("messages");

Meteor.methods({
  "messages.create"(text) {
    check(text, String);

    Messages.insert({
      text,
      userId: this.userId,
      createdAt: new Date(),
    });
  },
});
