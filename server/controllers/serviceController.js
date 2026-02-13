const Service = require("../models/Service");

// GET all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// ADD new service (Admin only)
exports.addService = async (req, res) => {
  try {
    const { title, desc, icon, color } = req.body;

    if (!title || !desc || !icon || !color) {
      return res.status(400).json({ message: "All fields required ❌" });
    }

    const newService = await Service.create({
      title,
      desc,
      icon,
      color,
    });

    res.status(201).json({
      message: "Service Added Successfully ✅",
      service: newService,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};

// DELETE service (Admin only)
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: "Service not found ❌" });
    }

    await Service.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Service Deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: "Server Error ❌", error });
  }
};
