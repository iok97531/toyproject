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
  "users.signUp"(email, password, username, phonenumber) {
    check(email, String);
    check(password, String);
    check(username, String);
    check(phonenumber, String);

    Accounts.createUser({
      email,
      password,
      username,
      profile: { phonenumber },
    });

    return true;
  },
  "users.delete"() {
    Meteor.users.remove(Meteor.user()._id);
  },
  "users.update"() {},
});
