const { Comment } = require("./Comment");
const { Admin } = require("./Admin");
let { User, userDB } = require("./User");

function Moderator(name, email) {
  User.call(this, name, email);
  this.isModerator = true;
}

Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.constructor = Moderator;

Moderator.prototype.deleteSingleUser = function(userId) {
  let afterRemoval = userDB.filter(user => user.userId !== userId);
  userDB = afterRemoval;
  return "User deleted Successfully";
};
