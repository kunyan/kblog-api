var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: String,
  email: { type: String, required: true, unique: true },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

var User = mongoose.model('User', schema);

module.exports = User;
