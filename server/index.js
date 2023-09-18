const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "askgeeta.negi@gmail.com",
    pass: "pandzmdlqrotjblo",
  },
});

// Define the feedback form route
app.post("/api/submit-feedback", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "feedback@gmail.com",
    to: "askgeeta.negi@gmail.com",
    subject: "New Feedback from Your Website",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false });
    } else {
      console.log("Email sent:", info.response);
      res.json({ success: true });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
