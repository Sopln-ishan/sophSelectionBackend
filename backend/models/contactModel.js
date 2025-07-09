// External Module
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subteam: [
      {
        type: String,
        required: true,
      },
    ],
    involvements: {
      type: String,
      required: true,
    },
    hours: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
// This will create a collection named 'contacts' in the MongoDB database
