const { Admin } = require("../src/Admin");
const { Moderator } = require("../src/Moderator");
const { User } = require("../src/User");

const user = new User("Martins", "martinsEmail");
user.saveToDB();
const user1 = new User("Victor", "victormail");
user1.saveToDB();
//Admin
const admin = new Admin("admin", "admin@mail.com");
admin.saveToDB();

let moderator = admin.createModerator("moderator", "moderator@mail.com");
//moderator.saveToDB()

describe("Admin should be able to do the following", function() {
  it("Should be an 'instanceof' User and Moderator and Admin", function() {
    expect(admin instanceof User).toBeTruthy();
    expect(admin instanceof Moderator).toBeTruthy();
    expect(admin instanceof Admin).toBeTruthy();

  });
  it("Should be Able to create a Moderator", function() {
    let moderator1 = admin.createModerator(
      "moderator",
      "moderator@mail.com"
    );
    expect(moderator1.isModerator).toBeTruthy();
    expect(moderator1.isAdmin).toBeFalsy();
  });
  it("Admin should be able to delete all comment in a Section", function() {
    expect(admin.deleteAllComment()).toMatch(/All Comment deleted./);
  });

  it("Should be able to get all users and moderator", function() {
    let db = admin.getAllUsers();
    
    expect(db).toHaveLength(2);
  });
  it("Inspecting returned array with a Valid user Object", function() {
    let db = admin.getAllUsers();
    expect(db).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: "martinsEmail",
          isAdmin: false,
          isModerator: false,
          userId: 1
        })
      ])
    );
  });

  it("Should be Able to delete a single User", function() {
    expect(admin.deleteSingleUser(1)).toMatch(/User deleted Successfully/);
  });

  it("Should be be able to delete all user from the Database", function() {
    expect(admin.deleteAllUsers()).toMatch(/All users has been deleted/);
  });
});
