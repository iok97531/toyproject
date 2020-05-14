import { Meteor } from "meteor/meteor";
import { Comments } from "../comments";

Meteor.publish("comments", () => {
  return Comments.find();
});
