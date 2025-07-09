// External Module
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
// Local Module
const contactRoute = require("./routes/contactRoute");

// Middleware
app.use(
  cors({
    origin: "https://sophomore-contact-form-frontend.vercel.app/",
    methods: "POST, GET, OPTIONS",
  })
);
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// Routes
console.log("Got to routes");
app.use("/api", contactRoute);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to MongoDB");
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error.message);
  });
