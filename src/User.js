const { Comment } = require("./Comment");

let userDB = [];

let idCounter = 0;

function User(name, email) {
  this.name = name;
  this.email = email;
  this.isAdmin = false;
  this.id = ++idCounter;
  this.isModerator = false;
}

User.prototype.saveToDB = function() {
  let user = {
    name: this.name,
    email: this.email,
    isAdmin: this.isAdmin,
    userId: this.id,
    isModerator: false;
  }

  userDB.push(user);
  return "Saved to Database";
}

User.prototype.postComment = function(comment) {
  return new Comment(this, comment).createComment();
};

User.prototype.userEditComment = function(commentId, newMessage) {
  return Comment.prototype.editComment(commentId, newMessage, this);
};

User.prototype.viewAllComment = function() {
  return Comment.prototype.viewAll();
};

User.prototype.deleteSIngleComment = function(commentId) {
  return Comment.prototype.deleteSingleComment(commentId, this);
}

module.exports = { User, userDB };