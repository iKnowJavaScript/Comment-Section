# Comment-Section

Website comment sectionn with Prototypal Oriented Programming with User, Moderator and Admin functionality.

> User Object should be able to perforrm all these operations and should be available to their Instances through Prototype Inheritance.

- Create a new user.
- Create a new Comment.
- Edit his own comment.
- Get all comment, both his and other user's comment in the section.
- Delete his personal comment.

> Moderator Object should inherit all User functionality and these -

- Delete any Comment.
- Delete a single user.
- Get the list of all users.

> Admin Object should be able to perform all the Operations a User and Moderator Object can Perform Including these -

- Create a moderator.
- Delete all Comment.
- Delete all users.


> And Comment object that contains the following properties
- author_id
- author_name
- commentMessage
- comment_id
- timeCreated
- dateCreated


** **

## Data Persistence
I will be using array to save my user, moderator, admin and comment objects. 


## Testing
Jest was used to test every functionality of this Project.     

Feel free to clone and `npm init` to get the feel of the app and `npm test` before adding more functionality if you wish.

## Acknowledgments

This was a tutorial to further deepens my Knowledge in Object Prototypal Inheritance in JavaScript so feel free to add to it.

Articles on both prototype and testing is available on Medium