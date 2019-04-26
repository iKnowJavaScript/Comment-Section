const { Comment } = require("./Comment");
const { Moderator } = require("./Moderator");
let { User, userDB } = require("./User");

function Admin(name, email) {
  Moderator.call(this, name, email);
  this.isAdmin = true;
}

Admin.prototype = Object.create(Moderator.prototype);
Admin.prototype.constructor = Admin;


Admin.prototype.deleteAllComment = function() {
  return Comment.prototype.deleteAllComment();
};

Admin.prototype.deleteAllUsers = function() {
  let adminsOnly = userDB.filter(user => user.isAdmin === true);
  userDB = adminsOnly;
  return "All users has been deleted";
};

module.exports = { Admin };
