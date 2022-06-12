const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const cmtRouter = require('./routes/cmt');
const express = require('express');
const cors = require('cors');
const  constants  = require("./middleware/constants");

const app = express();

mongoose.connect(constants.MONGO_URL)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
  
  app.use(cors());
app.use(express.json());
app.use('/api/cmt', cmtRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));