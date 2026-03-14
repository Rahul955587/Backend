const mongoose = require("mongoose");

async function connectDB() {
  //await mongoose.connect("mongodb+srv://rahul:Rahul123@backend.owxdm1h.mongodb.net/Project_01");
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to DB");
}

module.exports = connectDB;
