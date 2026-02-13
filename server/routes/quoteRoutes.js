const express = require("express");
const {
  createQuote,
  getQuotes,
  updateQuoteStatus,
  deleteQuote,
} = require("../controllers/quoteController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Customer submit quote (public)
router.post("/", createQuote);

// Admin (protected)
router.get("/", protect, getQuotes);
router.put("/:id/status", protect, updateQuoteStatus);
router.delete("/:id", protect, deleteQuote);

module.exports = router;
