const { User, userDB } = require("../src/User");
const { Comment, CommentDB } = require("../src/Comment");

const user = new User("Martins", "martinsEmail");
user.saveToDB();
const user1 = new User("Victor", "victormail");
user1.saveToDB();

describe("Testing User Instances and saving it to Database", function() {
  it("Should create new User instance", function() {
    expect(user).toEqual({
      name: "Martins",
      email: "martinsEmail",
      isAdmin: false,
      id: 1
    });
  });

  it("isAdmin should be set to false", function() {
    expect(user.isAdmin).toBeFalsy();
  });

  it("DB should have the length of two given only two user has registered", function() {
    expect(userDB).toHaveLength(2);
  });

  it("New User instances with JS 'instanceOf' ", function() {
    expect(user instanceof User).toBeTruthy();
  });
});

let comment1 = user.postComment(
  "This is the first Comment in this section, My next comment is going to show you how this app works. Keep your finger crossed"
);
let comment2 = user1.postComment(
  "Hello @Martins! A guide around will be welcome because I want to know more about what some of these feature do."
);

describe("When registered Post a comment in the comment section", function() {
  it("Should return Comment Object", function() {
    console.log(comment1);
    expect(comment1).toEqual(expect.objectContaining({}));
  });

  it("Two Comment should have been saved to the CommentDB", function() {
    expect(CommentDB).toHaveLength(2);
  });
});

describe("Testing when a User Edit a Comment Object", function(){
  it("Should return String Matching this", function() {
    
    expect(user1.userEditComment(2, "Thanks")).toMatch(/Edited By Victor/)
  })
})
