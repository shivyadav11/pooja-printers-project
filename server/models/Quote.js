const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: String, required: true },
    size: { type: String, required: true },
    message: { type: String },
    estimatedPrice: { type: String },

    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Completed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
