const Quote = require("../models/Quote");

// Customer Submit Quote
exports.createQuote = async (req, res) => {
  try {
    const { name, mobile, product, quantity, size, message, estimatedPrice } =
      req.body;

    if (!name || !mobile || !product || !quantity || !size) {
      return res.status(400).json({ message: "All required fields missing ❌" });
    }

    const newQuote = await Quote.create({
      name,
      mobile,
      product,
      quantity,
      size,
      message,
      estimatedPrice,
    });

    res.status(201).json({
      message: "Quote Submitted Successfully ✅",
      quote: newQuote,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// Admin Get All Quotes
exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// Admin Update Status
exports.updateQuoteStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const quote = await Quote.findById(req.params.id);

    if (!quote) {
      return res.status(404).json({ message: "Quote not found ❌" });
    }

    quote.status = status || quote.status;
    await quote.save();

    res.status(200).json({
      message: "Quote Status Updated ✅",
      quote,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// Admin Delete Quote
exports.deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);

    if (!quote) {
      return res.status(404).json({ message: "Quote not found ❌" });
    }

    await Quote.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Quote Deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};
