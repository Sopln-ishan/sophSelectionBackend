// External Module
const express = require("express");

// Local Module
const createContact = require("../controllers/createContact");

const contactRoute = express.Router();

// A get method for the contact route
contactRoute.get("/", (req, res) => {
  res.json({
    message: "Contact route is working!",
  });
});

// A post method for the contact route
console.log("Got to contact route post method");
contactRoute.post("/", createContact);

module.exports = contactRoute;
