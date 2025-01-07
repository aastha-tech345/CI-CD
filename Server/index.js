// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoutes = require("./route/contact.route");
require("dotenv").config();

const connectDB = require("./config/db");

// Connect to Database
connectDB();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/email", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
