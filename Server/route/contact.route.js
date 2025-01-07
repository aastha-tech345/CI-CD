// routes/emailRoutes.js
const express = require("express");
const router = express.Router();
const emailController = require("../controller/contact.controller");

router.post("/send", emailController.sendEmail);

module.exports = router;
