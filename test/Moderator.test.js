const { User } = require("../src/User");
const { Admin } = require("../src/Admin");
const { Moderator } = require("../src/Moderator");

const user = new User("Martins", "martinsEmail");
user.saveToDB();
const user1 = new User("Victor", "victormail");
user1.saveToDB();
const admin = new Admin("admin", "admin@mail.com");
admin.saveToDB();

//Creating Moderator
const moderator = admin.createModerator("moderator", "moderator@mail.com");
moderator.saveToDB();

//Making Comment
user.postComment("First Comment.");
user1.postComment("Second comment.");

describe("Test for Moderators", function() {
  it("Should be an 'instanceof' User and Moderator", function() {
    expect(moderator instanceof User).toBeTruthy();
    expect(moderator instanceof Moderator).toBeTruthy();
  });

  it("Should be able to delete any comment", function() {
    expect(moderator.deleteSingleComment(2)).toMatch(/Deleted By moderator/);
  });

  it("Should be able to get all users and moderator", function() {
    let db = moderator.getAllUsers();
    expect(db).toHaveLength(3);
  });

  it("Should be Able to delete a single User", function() {
    expect(admin.deleteSingleUser(1)).toMatch(/User deleted Successfully/);
  });
});
