import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { check } from "meteor/check";
import { Posts } from "../posts/posts";

SimpleSchema.defineValidationErrorTransform((error) => {
  const ddpError = new Meteor.Error(error.message);
  ddpError.error = "validation-error";
  ddpError.details = error.details;
  ddpError.reason = error.message;
  ddpError.message = error.message;

  return ddpError;
});

export const signUp = new ValidatedMethod({
  name: "users.signUp",
  validate: new SimpleSchema({
    email: { type: String },
    password: { type: String },
    username: { type: String },
    phoneNumber: { type: String },
  }).validator(),
  run({ email, password, username, phoneNumber }) {
    Accounts.createUser({
      email,
      password,
      username,
      profile: { phoneNumber, favoritePosts: [] },
    });

    return true;
  },
});

Meteor.methods({
  "users.update"(password, phoneNumber) {
    check(password, String);
    check(phoneNumber, String);
    if (password !== "") {
      Accounts.setPassword(this.userId, password);
    }

    if (
      phoneNumber !== "" &&
      phoneNumber !== Meteor.user().profile.phoneNumber
    ) {
      Meteor.users.update(this.userId, {
        $set: {
          "profile.phoneNumber": phoneNumber,
        },
      });
    }
  },
  "users.toggleFavorite"(postId) {
    check(postId, String);

    posts = Meteor.user().profile.favoritePosts;

    if (posts.indexOf(postId) === -1) {
      posts.push(postId);
      Posts.update(postId, {
        $inc: { numLikes: 1 },
      });
    } else {
      posts.splice(posts.indexOf(postId), 1);
      Posts.update(postId, {
        $inc: { numLikes: -1 },
      });
    }

    Meteor.users.update(this.userId, {
      $set: {
        "profile.favoritePosts": posts,
      },
    });
  },
});
