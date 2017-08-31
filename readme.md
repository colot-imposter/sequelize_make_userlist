CREATE
put an Add a user link on the users page
that link will go to  a route in app.js which will return a mustache page that has a form to create a user.
The form will post to a route in app.js which will use sequelize to create the user and then redirect to /users


Delete
1a. we need a button on the users list for each user to delete
1b. we need to put the button in a form that posts
1c. we need to pass the id of the user when we post so that we can uniquely identify

2a. we need a route for this post that deletes the user and then shows the list of users
