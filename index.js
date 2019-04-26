const { User } = require("./src/User");
const { Admin } = require("./src/Admin");
const { Moderator } = require("./src/Moderator");

const user = new User("Martins", "martinsEmail");
user.saveToDB();
const user1 = new User("victor", "victormail");
user1.saveToDB();

console.log(
  user.postComment(
    "This is the first Comment in this section, My next comment is going to show you how this app works. Keep your finger crossed"
  )
);
console.log(
  user1.postComment(
    "Hello @Martins! A guide around will be welcome because I want to know more about what some of these feature do."
  )
);

console.log(user1.userEditComment(2, "Thanks @Martins, I'll wait on it."));
console.log(user1.deleteSIngleComment(2));

user.viewAllComment();

let admin = new Admin("Admin", "Admin@gmail");
admin.saveToDB();

//console.log(admin.deleteSingleUser(1))
//console.log(admin.deleteAllUsers())
