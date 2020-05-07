import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Accounts } from "meteor/accounts-base";

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
      protile: { phonenumber },
    });

    return true;
  },
  "users.delete"(userId) {
    check(userId, String);

    /*if(userId !== this.user.id) {
        throw new Meteor.Error("Not Authorized")
      }*/

    Meteor.users.remove(userId);
  },
  "users.update"() {},
  "users.getProfile"(userId) {
    check(userId, String);

    /*if(userId !== this.user.id) {
        throw new Meteor.Error("Not Authorized")
    }*/
    return Meteor.users.findOne(userId);
  },
  "users.signIn"(user, password) {
    check(user, String);
    check(password, String);

    Meteor.loginWithPassword(user, password);
  },

  "users.logOut"() {
    Meteor.logout();
  },
});
