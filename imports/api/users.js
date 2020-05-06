import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Accounts } from "meteor/account";

Meteor.methods({
  "users.insert"(email, password, username, phonenumber) {
    check(email, string);
    check(password, string);
    check(username, string);
    check(phonenumber, string);

    Accounts.createUser({
      email,
      password,
      username,
      protile: { phonenumber },
    });
  },
  "users.delete"(userId) {
    check(userId, string);

    /*if(userId !== this.user.id) {
        throw new Meteor.Error("Not Authorized")
      }*/

    Meteor.users.remove(userId);
  },
  "users.update"() {},
  "users.getProfile"(userId) {
    check(userId, string);

    /*if(userId !== this.user.id) {
        throw new Meteor.Error("Not Authorized")
    }*/
    return Meteor.users.findOne(userId);
  },
  "users.passwordLogIn"(user, password) {
    check(user, string);
    check(password, string);

    Meteor.loginWithPassword(user, password);
  },

  "users.logOut"() {
    Meteor.logout();
  },
});
