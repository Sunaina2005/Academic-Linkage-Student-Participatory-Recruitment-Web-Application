const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  cv: Buffer, // store the file as a Buffer
  exp: String,
  approved: { type: Boolean, default: false },
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;
