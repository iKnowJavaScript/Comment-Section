const { Comment } = require("./Comment");
const { Moderator } = require("./Moderator");
let { userDB } = require("./User");

function Admin(name, email) {
  Moderator.call(this, name, email);
  this.isAdmin = true;
}

Admin.prototype = Object.create(Moderator.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.createModerator = function(name, email) {
  return new Moderator(name, email);
};

Admin.prototype.makeUserModderator = function(user) {
  user.name = Moderator;
  return new Moderator(user.name, user.email);
};

Admin.prototype.deleteAllComment = function() {
  return Comment.prototype.deleteAllComment();
};

Admin.prototype.deleteAllUsers = function() {
  let adminsOnly = userDB.filter(user => user.isAdmin === true);
  userDB = adminsOnly;
  return "All users has been deleted";
};

module.exports = { Admin };
