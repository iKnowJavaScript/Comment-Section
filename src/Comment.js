let CommentDB = [];

let commentIdCounter = 0;

function Comment(author, commentMessage) {
  // if(!(author instanceof User)) {
  //   throw Error("Only User instances can post Comment")
  // }

  this.authorName = author.name;
  this.authorEmail = author.email;
  this.commentMessage = commentMessage;
  this.timeCreated = new Date().toLocaleTimeString();
  this.dateCreated = new Date().toLocaleDateString();
  this.commentId = ++commentIdCounter;
  this.authorId = author.id;

  return this;
}

function displayComment(context) {
  return `${context.commentMessage}
          By ${context.authorName} at ${context.timeCreated} - ${
    context.dateCreated
  } `;
}

Comment.prototype.createComment = function() {
  let comment = {
    authorName: this.authorName,
    authorEmail: this.authorEmail,
    commentMessage: this.commentMessage,
    timeCreated: this.timeCreated,
    dateCreated: this.dateCreated,
    commentId: this.commentId,
    authorId: this.authorId
  };

  CommentDB.push(comment);
  return displayComment(this);
};

Comment.prototype.editComment = function(commentId, newMessage) {
  let commentIndex = 0;
  CommentDB.forEach(function(comment, index) {
    if (comment.commentId === commentId) {
      comment.commentMessage = newMessage;
      commentIndex = index;
    }
  });

  return CommentDB[commentIndex];
};

Comment.prototype.viewAll = function() {
  CommentDB.map(function(comment) {
    console.log(displayComment(comment));
  });
};

Comment.prototype.deleteSingleComment = function(commentId) {
  let commentIndex = 0;
  CommentDB.forEach(function(comment, index) {
    if (comment.commentId === commentId) {
      commentIndex = index;
    }
  });
  console.log(commentIndex)

  CommentDB = CommentDB.splice(commentIndex, 0) //work on this

  return CommentDB;
}

Comment.prototype.deleteAllComment = function(commentId) {
  CommentDB = []

  return "All comment deleted.";
}







const comment = new Comment(
  { name: "Martins", email: "email", id: 1 },
  "Doing fine."
);
console.log(comment.createComment());

const comment1 = new Comment(
  { name: "Martins", email: "email", id: 2 },
  "Doing fine 2222"
);
console.log(comment1.createComment());

console.log("edit ",comment.editComment(1, "new message for comment"));

console.log("DB", CommentDB);
comment.viewAll()

//console.log(comment.deleteSingleComment(2))

console.log(comment.deleteAllComment())

console.log("DB", CommentDB);
