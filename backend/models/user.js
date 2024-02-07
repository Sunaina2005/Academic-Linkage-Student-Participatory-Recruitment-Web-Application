// backend/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter a username.'],
    validate: {
      validator: function (value) {
        return /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(value);
      },
      message: 'Username should be alphanumeric without spaces.',
    },
  },
  email: {
    type: String,
    required: [true, 'Please enter an email address.'],
    unique: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Please enter a valid email address.',
    },
  },
  password: {
    type: String,
    required: [true, 'Please enter a password.'],
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: 'Password should be at least 6 characters.',
    },
  },
});

// Custom validator for confirmPassword
userSchema.path('confirmPassword', {
  type: String,
  validate: {
    validator: function () {
      return this.confirmPassword === this.password;
    },
    message: 'Passwords do not match.',
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
