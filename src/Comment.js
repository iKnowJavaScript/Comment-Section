let CommentDB = [];

let commentIdCounter = 0;

function Comment(author, commentMessage) {
  // if (author.constructor.name !== "User") {
  //   throw Error("Only User instances can post Comment");
  // }

  this.authorName = author.name;
  this.authorEmail = author.email;
  this.commentMessage = commentMessage;
  this.timeCreated = new Date().toLocaleTimeString();
  this.dateCreated = new Date().toLocaleDateString();
  this.isAdmin = author.isAdmin;
  this.commentId = ++commentIdCounter;
  this.authorId = author.id;

  return this;
}

function displayComment(userObj, isEdited = "Originally") {
  return `  ${userObj.commentMessage}
          ${isEdited} By ${editedBy(userObj)} at ${userObj.timeCreated} - ${
    userObj.dateCreated
  } \n\n`;
}

function editedBy(who) {
  if (who.isAdmin === false) return who.authorName;
  if (who.isAdmin === true) return Admin;
}

Comment.prototype.createComment = function() {
  CommentDB.push(this);
  return displayComment(this);
};

Comment.prototype.editComment = function(commentId, newMessage, author) {
  let commentIndex = 0;

  CommentDB.forEach(function(comment, index) {
    if (comment.commentId === commentId) {
      if (comment.authorId !== author.id && author.isAdmin === false) {
        throw Error("Error: You cannot Edit another User's Comment.");
      } else {
        comment.commentMessage = newMessage;
        commentIndex = index;
      }
    }
  });
  let comment = CommentDB[commentIndex];
  return displayComment(comment, "Edited");
};

Comment.prototype.viewAll = function() {
  CommentDB.map(function(comment) {
    console.log(displayComment(comment));
  });
};

Comment.prototype.deleteSingleComment = function(commentId, author) {
  let commentIndex = 0;
  CommentDB.forEach(function(comment, index) {
    if (comment.commentId === commentId) {
      if (comment.authorId !== author.id && author.isAdmin === false) {
        throw new Error("Error: You cannot Delete another User's Comment.");
      } else {
        comment.commentMessage =
          "This Comment has been deleted for some reasons";
        commentIndex = index;
      }
    }
  });
  let comment = CommentDB[commentIndex];

  return displayComment(comment, "Deleted");
};

Comment.prototype.deleteAllComment = function() {
  CommentDB = [];

  return "All comment deleted.";
};

module.exports = { Comment, CommentDB };
