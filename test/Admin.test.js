const { Admin } = require("../src/Admin");
const { User } = require("../src/User");

const user = new User("Martins", "martinsEmail");
user.saveToDB();
const user1 = new User("Victor", "victormail");
user1.saveToDB();
//Admin
const admin = new Admin("admin", "admin@mail.com");
admin.saveToDB();

describe("Admin should be able to do the following", function() {
  it("Admin should be able to delete all comment in a Section", function() {
    expect(admin.deleteAllComment()).toMatch(/All Comment deleted./);
  });

  it("Should exclude every admin from the return array of users", function() {
    let db = admin.getAllUsers();
    expect(db).toHaveLength(2);
  });
  it("Inspecting returned array with a Valid user Object", function() {
    let db = admin.getAllUsers();
    expect(db).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Martins",
          email: "martinsEmail",
          isAdmin: false,
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
