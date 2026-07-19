const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes

  max: 5,

  message: {
    success: false,
    message:
      "Too many contact requests. Please try again after 10 minutes.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { contactLimiter };