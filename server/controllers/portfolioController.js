const Portfolio = require("../models/Portfolio");

// GET portfolio
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find().sort({ createdAt: -1 });
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// ADD portfolio with file upload
exports.addPortfolio = async (req, res) => {
  try {
    const { title, category } = req.body;

    if (!title || !category) {
      return res.status(400).json({ message: "Title & Category required ❌" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image required ❌" });
    }

    const newItem = await Portfolio.create({
      title,
      category,
      imageUrl: req.file.path, // Cloudinary URL
    });

    res.status(201).json({
      message: "Portfolio Added ✅",
      portfolio: newItem,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// DELETE portfolio
exports.deletePortfolio = async (req, res) => {
  try {
    const item = await Portfolio.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Portfolio not found ❌" });
    }

    await Portfolio.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Portfolio Deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};
