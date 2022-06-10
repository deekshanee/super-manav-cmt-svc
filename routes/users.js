const {users} = require('../models/users'); 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const response = await users.find({});
  console.log("response is ",response);
  res.send(response);
});


module.exports = router; 