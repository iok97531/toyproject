Meteor.publish("userData", (userId) => {
  return Meteor.users.find({ _id: userId }, { fields: { password: 0 } });
});
// Should add username profilephoto on comments
