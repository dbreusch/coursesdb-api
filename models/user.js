// users-api: database schema
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
  type: { type: String, required: false },
  active: { type: Boolean, required: false },
  dateAdded: { type: Date, required: false },
  lastLogin: { type: Date, required: false },
  isAdmin: { type: Boolean, required: false},
  courses: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Course' }]
});

// userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
