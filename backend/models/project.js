// project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectDetails: {
    type: String,
    required: true,
  },
  projectImage: {
    type: Buffer, // Change the type to Buffer for binary data
    required: true,
  },
  requiredExpertise: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
