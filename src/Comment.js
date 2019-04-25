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
  return `${this.commentMessage}
          By ${this.authorName} at ${this.timeCreated} - ${this.dateCreated} `;
};

Comment.prototype.editComment = function(commentId, newMessage) {
  let commentIndex = 0;
  CommentDB.forEach(function(comment, index) {
    if(comment.commentId === commentId) {
      comment.commentMessage = newMessage;
      comment = index
    }
  });

  return CommentDB[commentIndex];
};



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

console.log(comment.editComment(1, "new message for comment"));

console.log("DB", CommentDB);
