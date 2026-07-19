const express = require("express");
const router = express.Router();

const { createContact } = require("../controllers/contactController");
const { contactLimiter } = require("../middleware/rateLimiter");

router.post("/", contactLimiter, createContact);

module.exports = router;