//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var User = new Schema({
  uid: String,
  fName: String,
  lName: String,
  phoneNo: String,
  email: String,
  password: String,
  address: String,
  city: String,
  state: String
});

// Compile model from schema
var UserModel = mongoose.model('User', User );

module.exports = UserModel;