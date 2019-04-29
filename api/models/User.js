/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName:"user",
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    firstname: { type: 'string',
    required:true 
    },

    lastname: { type: 'string',
    required:true 
    },

  
    contact: { type: 'string',
    required:true ,
    isNumber:true,
    min: 10 ,
    max: 10,
    },

    email: { type: 'email',
    required:true ,
    unique:  true,
    isEmail: true,
    },

    password: { type: 'string',
    required:  true ,
    minLength: 6 ,
    maxLength: 49,
    regex:    /^[a-zA-Z]$/i,
    regex:    /^[0-9]$/i,
    },
    //customToJSON: function () {
    //return _.omit(this, ['password'])
    //},
    //lastname: { type: 'string',
    //required:true ,
    //minLength: 1 
    //},
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    // To use sails hook validation in your API install the following module
    //npm install --save sails-hook-validation
  
   validationMessages:{
    firstname: {
      required: "Please type your Firstname",
    },
    lastname: {
      required: "Please type your Lastname",
    },
    contact: {
      required: "Please type your Mobile number",
      isNumber: "Enter your mobile number",
      min: "Mobile Number should be ten digits",
      max: "Mobile Number should be ten digits",
    },
    email: {
      required: "Please type your email",
      isEmail:  "Enter the valid E-mail",
      unique:   "This email is used , enter another one",
    },
    password: {
      required: "Enter your password which should be 6 minimum length ,containing Atleast a number and an alaphabet!",
      minLength:"Password should be atleast 6 characters",
      maxLength:"Password should not be morethan 49 characters",
      regex:    "Password should contain minimum one character and one number "
    }

   },

  

};
