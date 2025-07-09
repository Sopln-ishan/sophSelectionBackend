// External Module
const mongoose = require("mongoose");

// Local Module
const Contact = require("../models/contactModel");

// Handle post request to create a new contact
const createContact = async (req, res) => {

  console.log("Received request to create contact:", req.body);

  const {
    name,
    roll,
    phone,
    email,
    subteam,
    involvements,
    hours,
    skills,
    reason,
  } = req.body;

  try {
    const contact = await Contact.create({
      name,
      roll,
      phone,
      email,
      subteam: subteam[0],
      involvements,
      hours,
      skills,
      reason,
    });
    console.log("Contact created successfully:", contact);
    res.status(200).json({ message: "Contact created successfully" });
  } catch (error) {
    console.log("Error creating contact:", error.message);
    res
      .status(400)
      .json({ error: "Failed to create contact", details: error.message });
  }
};

module.exports = createContact;
