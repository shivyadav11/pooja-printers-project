const express = require("express");
const {
  getPortfolio,
  addPortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getPortfolio);

// Upload image + save portfolio
router.post("/", protect, upload.single("image"), addPortfolio);

router.delete("/:id", protect, deletePortfolio);

module.exports = router;
