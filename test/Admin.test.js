const { Admin } = require("../src/Admin");
const { User } = require("../src/User");

const user = new User("Martins", "martinsEmail");
user.saveToDB();
const user1 = new User("Victor", "victormail");
user1.saveToDB();
//Admin
const admin = new Admin("admin", "admin@mail.com");
admin.saveToDB();

describe("Delete All comment", function() {
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

  it("", function() {
    expect(admin.deleteSingleUser(1)).toMatch(/User deleted Successfully/);
  });
});
