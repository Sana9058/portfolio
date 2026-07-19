const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Project = require("../models/Project");
const projects = require("./data");

dotenv.config();

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");

    // Delete existing projects
    await Project.deleteMany();

    // Insert new projects
    await Project.insertMany(projects);

    console.log("✅ Projects inserted successfully!");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seedDatabase();