import { Posts } from "../posts";

Meteor.publish("posts", () => {
  return Posts.find();
});
Meteor.publish("post", (_id) => {
  return Posts.find(_id);
});
