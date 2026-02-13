const express = require("express");
const {
  getServices,
  addService,
  deleteService,
} = require("../controllers/serviceController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public route
router.get("/", getServices);

// Admin routes (Protected)
router.post("/", protect, addService);
router.delete("/:id", protect, deleteService);

module.exports = router;
