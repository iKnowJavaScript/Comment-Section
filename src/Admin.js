const { Comment } = require("./Comment");
let { User, userDB } = require("./User");

function Admin(name, email) {
  User.call(this, name, email);
  this.isAdmin = true;
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.deleteAllComment = function() {
  return Comment.prototype.deleteAllComment();
};

Admin.prototype.getAllUsers = function() {
  return userDB.filter(user => user.isAdmin === false);
};

Admin.prototype.deleteAllUsers = function() {
  let adminsOnly = userDB.filter(user => user.isAdmin === true);
  userDB = adminsOnly
  return "All users has been deleted";
};

module.exports = { Admin };
