const { User, userDB } = require("../src/User");

const user = new User("Martins", "martinsEmail");
user.saveToDB()
const user1 = new User("Victor", "victormail");
user1.saveToDB()

describe("Testing User Instances and saving it to Database", function() {
  it("Should create new User instance", function() {
    expect(user).toBeDefined();
  });

  it("Checking if isAdmin is false", function() {
    expect(user.isAdmin).toBeFalsy();
  });

  it("Saving instances to Database", function() {
    expect(userDB).toHaveLength(2);
  });

  it("New User instances with JS 'instanceOf' ", function() {
    expect(user instanceof User).toBeTruthy();
  });
});