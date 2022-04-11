const mongoose = require("mongoose");

const CardInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  number: {
    type: Number,
    unique: true,
    required: [true, "Please add your card number"],
    min: 1000000000000000,
    max: 9999999999999999,
  },
  securityNumber: {
    type: Number,
    required: [true, "Please add your security number"],
    min: 100,
    max: 999,
  },
  expiryMonth: {
    type: Number,
    required: [true, "Please add an expiry month"],
    min: 1,
    max: 12,
  },
  expiryYear: {
    type: Number,
    required: [true, "Please add an expiry year"],
    min: 23,
    max: 30,
  },
  orderTotal: {
    type: Number,
    required: [true],
  },
});

module.exports = mongoose.model("CardInfo", CardInfoSchema);
