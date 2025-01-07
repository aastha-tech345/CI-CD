// controllers/emailController.js
const nodemailer = require("nodemailer");
const Email = require("../model/contact.model");

exports.sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `You have received a message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    const newEmail = new Email({
      name,
      email,
      message,
    });
    await newEmail.save();

    res.status(200).send({ message: "Email sent and saved successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Failed to send email." });
  }
};
