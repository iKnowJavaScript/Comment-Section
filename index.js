const { User } = require("./src/User");
const { Admin } = require("./src/Admin");

const user = new User("Martins", "martins@mail.com");
user.saveToDB();
const user1 = new User("Victor", "victor@mail.com");
user1.saveToDB();

let comment =
  "This is the first Comment in this section, My next comment is going to show you how this app works. Keep your finger crossed";
let comment1 =
  "Hello @Martins! A guide around will be welcome because I want to know more about what some of these feature do.";
console.log(user.postComment(comment));
console.log(user1.postComment(comment1));

console.log(user1.userEditComment(2, "Thanks @Martins, I'll wait on it."));
console.log(user1.deleteSIngleComment(2));

user.viewAllComment();

let admin = new Admin("Admin", "Admin@mail.com");
admin.saveToDB();

let moderator = admin.createModerator("Moderator", "moderator@mail.com");
moderator.saveToDB();

console.log(moderator.deleteSingleComment(1));

console.log(moderator.getAllUsers());
// console.log(moderator.deleteSingleUser(1));
// console.log(admin.deleteAllComment());
// console.log(admin.deleteAllUsers())

// An admin can also make an existing user a Moderator
let moderator1 = admin.makeUserModderator(user);
//console.log(moderator1);
