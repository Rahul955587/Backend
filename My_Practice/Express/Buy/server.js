const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Product = require("./models/Product");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.post("/add-product", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.get("/search", async (req, res) => {
  const q = req.query.q;

  const products = await Product.find({
    name: { $regex: q, $options: "i" },
  });

  res.json(products);
});

function getAverage(history) {
  const total = history.reduce((sum, item) => sum + item.price, 0);
  return total / history.length;
}

function getRecommendation(current, avg) {
  if (current < avg * 0.8) return "BUY 🟢";
  if (current < avg * 1.25) return "WAIT 🔴";
  return "NORMAL 🟡";
}

function checkSeller(seller) {
  if (seller.rating < 3.5 || seller.reviews < 50) {
    return "Low Reliability ⚠️";
  }
  return "Trusted Seller ✅";
}

app.get("/analyze/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  const avg = getAverage(product.history);
  const current = product.prices[0].price;

  const recommendation = getRecommendation(current, avg);
  const sellerStatus = checkSeller(product.seller);

  res.json({
    name: product.name,
    current,
    avg,
    recommendation,
    sellerStatus,
  });
});



app.listen(3000, () => console.log("Server running"));
