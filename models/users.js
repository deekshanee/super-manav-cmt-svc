const Joi = require('joi');
const mongoose = require('mongoose');

const users = mongoose.model('users', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}));

function validateTemp(users) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(users, schema);
}

exports.users = users; 
exports.validate = validateTemp;