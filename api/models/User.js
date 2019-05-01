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
    },

    contact: { type: 'number',
    required:true ,
    min:     6000000000 ,
    max:     9999999999,
    },

    email: { type: 'string',
    required:true ,
    unique:  true,
    },

    password: { type: 'string',
    required:  true ,
    minLength: 6 ,
    maxLength: 49,
    }

    },
       customToJSON: function () {
    return _.omit(this, ['password'])
    },
  
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
   validationMessages:{
    firstname: {
      required: "Please type your Firstname",
    },
    lastname: {
      required: "Please type your Lastname",
    },
    contact: {
      required: "Please type your Mobile number",
      min: "Mobile Number should be ten digits",
      max: "Mobile Number should be ten digits",
    },
    email: {
      required: "Please type your email",
      unique:   "This email is used , enter another one",
    },
    password: {
      required: "Enter your password which should be 6 minimum length ,containing Atleast a number and an alaphabet!",
      minLength:"Password should be atleast 6 characters",
      maxLength:"Password should not be morethan 49 characters",
    }

   },

  

};

