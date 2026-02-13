const Pricing = require("../models/Pricing");

// GET all pricing
exports.getPricing = async (req, res) => {
  try {
    const pricing = await Pricing.find().sort({ createdAt: -1 });
    res.status(200).json(pricing);
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// ADD pricing (Admin)
exports.addPricing = async (req, res) => {
  try {
    const { title, price, unit, features } = req.body;

    if (!title || !price || !unit) {
      return res.status(400).json({ message: "All fields required ❌" });
    }

    const newPricing = await Pricing.create({
      title,
      price,
      unit,
      features: features || [],
    });

    res.status(201).json({
      message: "Pricing Added ✅",
      pricing: newPricing,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// DELETE pricing (Admin)
exports.deletePricing = async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);

    if (!pricing) {
      return res.status(404).json({ message: "Pricing not found ❌" });
    }

    await Pricing.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Pricing Deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};
