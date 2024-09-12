// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['User', 'Admin'], // Only these roles are allowed
    default: 'User'          // Default role is 'User'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
