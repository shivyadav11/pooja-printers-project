const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected ✅");

    const email = "admin@pooja.com";
    const password = "12345";

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      console.log("Admin already exists ✅");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("Admin Created Successfully ✅");
    process.exit();
  })
  .catch((err) => {
    console.log("MongoDB Error ❌", err);
    process.exit();
  });
