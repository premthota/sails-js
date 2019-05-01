module.exports = {
/**
* It will create a new user .
*/
create: function (req, res) {
let firstName = req.param('firstname'),
lastName = req.param('lastname'),
conTact = req.param('contact'),
eMail = req.param('email'),
passWord = req.param('password');
if(!firstName){
return res.badRequest({err:'Enter firstname'});
}
if(!conTact){
return res.badRequest({err:'Enter your mobile number'});
}
if(!eMail){
return res.badRequest({err:'Enetr a valid email'});
}
if(!passWord){
return res.badRequest({err:'Enter a valid password'});
}
User.create({
firstname : firstName,
lastname : lastName,
contact : conTact,
email : eMail,
password : passWord
})
.then(_user => {
if(!_user) return res.serverError({err: 'User created '});
return res.ok(_user);
})
.catch(err => res.serverError(err.message));
},


/**
* This method will update the user
*/

update: function (req, res) {
let firstName = req.param(`firstname`),
lastName = req.param(`lastname`),
conTact = req.param(`contact`),
eMail = req.param(`email`),
passWord = req.param(`password`);
userId = req.params.id;
if (!userId) return res.badRequest({ err: `user id is missing` });
let user = {};
if (firstName) {
user.firstname = firstName;
}
if (lastName) {
user.lastname = lastName;
}
if (conTact) {
user.contact = conTact;	
}
if (eMail) {
user.email = eMail;	
}
// write a function so it checks the user id with its password and verifies 
// before updating, if its true it updates and it creates error if not
if (passWord) {
user.password = passWord;	
}
User.update({ id: userId }, user)
.then(_user => {
if (!_user[0] || _user[0].length === 0) return res.notFound({ err: `No user found `});
return res.ok(_user[0]);
}).catch(err => res.serverError(err));

} ,


/**
* This method will delete the post
*/
delete: function (req, res) {
let userId = req.params.id;
if (!userId) return res.badRequest({ err: `missing user_id field` });
User.destroy({ id: userId })
.then(_user => {
if (!_user || _user.length === 0) return res.notFound({ err: `No user found in our record` });
return res.ok({msg:`User is deleted with id ${userId}`});
})
.catch(err => res.serverError(err));
},


/**
* Find all the posts with category and user
*/

findAll: function (req, res) {
User.find()
.populate(`id`)
.then(_users => {
if (!_users || _users.length === 0) {
throw new Error(`No user found`);
}
return res.ok(_users);
})
.catch(err => res.serverError(err));
},

/**
* find single post based on id
*/
findOne: function (req, res) {
let userId = req.params.id;
if (!userId) return res.badRequest({ err: `missing user_id field` });
User.findOne({ id: userId })
.populate(`user`)
.then(_user => {
if (!_user) return res.notFound({ err: `No user found` });
return res.ok(_user);
})
.catch(err => res.serverError(err));
}

};
