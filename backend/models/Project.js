const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image_url: {
      type: String,
      required: true,
    },

    tech_stack: [
      {
        type: String,
      },
    ],

    github_url: {
      type: String,
      required: true,
    },

    live_url: {
      type: String,
      default: null,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    display_order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);