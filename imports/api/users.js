import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Accounts } from "meteor/accounts-base";

if (Meteor.isServer) {
  Meteor.publish("userData", function () {
    if (!this.userId) {
      return this.ready();
    }
    return Meteor.users.find({ _id: this.userId });
  });
}

Meteor.methods({
  "users.signUp"(email, password, username, phoneNumber) {
    check(email, String);
    check(password, String);
    check(username, String);
    check(phoneNumber, String);

    Accounts.createUser({
      email,
      password,
      username,
      profile: { phoneNumber, favPostIds: [] },
    });

    return true;
  },
  "users.delete"() {
    Meteor.users.remove(Meteor.user()._id);
  },
  "users.update"() {},
  "users.toggleFav"(postId) {
    check(postId, String);

    posts = Meteor.user().profile.favPostIds;

    if (!posts.indexOf(postId)) {
      posts.splice(posts.indexOf(postId), 1);
    } else {
      posts.push(postId);
    }

    Meteor.users.update(Meteor.userId(), {
      $set: {
        profile: {
          phoneNumber: Meteor.user().profile.phoneNumber,
          favPostIds: posts,
        },
      },
    });
  },
});
