const { Comment } = require("./Comment");
const { User } = require("./User");

function Moderator(name, email) {
  User.call(this, name, email)
  this.isAModerator = true;
}

Moderator.prototype = Object.create(User.prototype)
Moderator.prototype.constructor = Moderator


Moderator.prototype.deleteSIngleComment = function(commentId) {
  return Comment.prototype.deleteSingleComment(commentId);
}

Moderator.prototype.deleteAllCOmment = function() {
  return Comment.prototype.deleteAllComment();
}