const { Comment } = require("./Comment");
let { User, userDB } = require("./User");

function Moderator(name, email) {
  User.call(this, name, email);
  this.isModerator = true;
  this.emoji = "🦄 ";
  
}

Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.constructor = Moderator;

Moderator.prototype.deleteSingleComment = function(commentId) {
  return Comment.prototype.deleteAnyComment(commentId, this);
};

Moderator.prototype.getAllUsers = function() {
  return userDB.filter(user => user.isAdmin === false);
};

Moderator.prototype.deleteSingleUser = function(userId) {
  let afterRemoval = userDB.filter(user => user.userId !== userId);
  userDB = afterRemoval;
  return "User deleted Successfully";
};

module.exports = { Moderator };
