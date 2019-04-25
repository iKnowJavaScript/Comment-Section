let CommentDB = [];

let commentIdCounter = 0;

function Comment(author, commentMessage) {
  if(!(author instanceof User)) {
    throw Error("Only User instances can post Comment")
  }

  this.author = author;
  this.commentMessage = commentMessage;
  this.timeCreated = new Date().toLocaleTimeString();
  this.dateCreated = new Date().toLocaleDateString();
  this.commentId = ++commentIdCounter;

  return this;
}

Comment.prototype.createComment = function(){
  DB["comments"].push(this)
  return `${this.commentMessage}
          By ${this.author.name} at ${this.timeCreated} - ${this.dateCreated} `
}

Comment.prototype.editComment = function(commentId, newMessage) {
  let targetComment = DB["comments"].filter(comment => comment.commentId === commentId)

  return targetComment.commentMessage = newMessage;
}

console.log(CommentDB)