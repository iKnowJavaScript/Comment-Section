let userDB = []

let idCounter = 0;

function User(name, email) {
  this.name = name;
  this.email = email;
  this.isAdmin = false;
  this.id = ++idCounter;
}

User.prototype.getId = function() {
  return this.id;
}


User.prototype.postComment = function(comment) {
  return new Comment(this, comment).createComment()
}

User.prototype.canEditComment = function(commentId, newMessage) {
  return new Comment.editComment(commentId, newMessage)
}