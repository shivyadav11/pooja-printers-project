const express = require("express");
const {
  getPricing,
  addPricing,
  deletePricing,
} = require("../controllers/pricingController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getPricing);
router.post("/", protect, addPricing);
router.delete("/:id", protect, deletePricing);

module.exports = router;
