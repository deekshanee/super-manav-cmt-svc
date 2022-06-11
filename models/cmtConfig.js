const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let cmtConfig = new Schema(
  {
    applicationName: {
      type: String,
      required: true,
    },
    env: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    historyConfig: {
      type: Array,
      required: true,
    },
    currentConfig: {
      type: Object,
      required: true,
     
    },
    createdBy: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    lastUpdatedBy:{
      type: String,
      required: true,
    },
    lastUpdatedAt: {
      type: Date,
      required: true
    },
    region: {
      type: String,
      required: true
    }
  },
  { collection: "CMTCONFIG" }
);

module.exports = mongoose.model("cmtConfig", cmtConfig);
