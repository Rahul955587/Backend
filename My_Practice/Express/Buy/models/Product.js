const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,

  prices: [
    {
      site: String,
      price: Number,
    },
  ],

  history: [
    {
      price: Number,
      date: { type: Date, default: Date.now },
    },
  ],

  seller: {
    rating: Number,
    reviews: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
