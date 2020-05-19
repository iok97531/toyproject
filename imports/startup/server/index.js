import { Meteor } from "meteor/meteor";
import "../../api/users/server/publications.js";
import "../../api/users/methods.js";
import "../../api/posts/posts.js";
import "../../api/posts/server/publications.js";
import "../../api/posts/methods.js";
import "../../api/comments/comments.js";
import "../../api/comments/server/publications.js";
import "../../api/messages/messages.js";

Meteor.startup(() => {});
