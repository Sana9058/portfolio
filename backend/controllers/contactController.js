const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

// @desc Save Contact Form
// @route POST /api/contact
// @access Public

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    await sendEmail({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

module.exports = { createContact };