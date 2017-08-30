const models = require('./models');

function createUser(){
  const user = models.User.build({
    name:'Hans Von Houston',
    email:'houston@sprockets.com ',
    bio:'tanzer'
  });

user.save().then(function(newUser){
  console.log(newUser.dataValues);
})
}


createUser();

function listUsers() {

models.User.findAll().then(function (users) {
  users.forEach(function(user){
    console.log(user.dataValues);
  })
})
}

listUsers();
