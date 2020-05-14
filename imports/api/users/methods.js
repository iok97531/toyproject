import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";
import { check } from "meteor/check";

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
    phoneNumber: { type: String, optional: true },
  }).validator(),
  run({ email, password, username, phoneNumber }) {
    Accounts.createUser({
      email,
      password,
      username,
      profile: { phoneNumber, favPostIds: [] },
    });

    return true;
  },
});

Meteor.methods({
  "users.delete"() {
    Meteor.users.remove(Meteor.user()._id);
  },
  "users.update"() {},
  "users.toggleFav"(postId) {
    check(postId, String);

    posts = Meteor.user().profile.favPostIds;

    if (posts.indexOf(postId) !== -1) {
      posts.splice(posts.indexOf(postId), 1);
    } else {
      posts.push(postId);
    }

    Meteor.users.update(this.userId, {
      $set: {
        profile: {
          phoneNumber: Meteor.user().profile.phoneNumber,
          favPostIds: posts,
        },
      },
    });
  },
});
