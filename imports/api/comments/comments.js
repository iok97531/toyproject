import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { Posts } from "../posts/posts";
import { check } from "meteor/check";

export const Comments = new Mongo.Collection("comments");

Comments.schema = new SimpleSchema({
  postId: { type: String },
  content: { type: String },
  userName: { type: String },
  createdAt: { type: String, defaultValue: new Date() },
});

Meteor.methods({
  "comments.create"(content, postId) {
    const commentId = new Meteor.Collection.ObjectID().valueOf();
    Comments.insert({
      _id: commentId,
      postId,
      content,
      userName: Meteor.user().username,
      userId: this.userId,
      createdAt: new Date(),
    });
    Posts.update(postId, {
      $push: { comments: commentId },
      $inc: { numComments: 1 },
    });
  },
  "comments.delete"(commentId) {
    check(commentId, String);
    const comment = Comments.findOne({ _id: commentId });
    Posts.update({ _id: comment.postId }, { $inc: { numComments: -1 } });
    Comments.remove({ _id: commentId });
  },
});
