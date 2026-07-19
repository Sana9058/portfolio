const Project = require("../models/Project");

// GET all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ display_order: 1 });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
      error: error.message,
    });
  }
};

module.exports = { getProjects };