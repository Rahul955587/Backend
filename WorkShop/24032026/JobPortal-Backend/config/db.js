const mongoose = require('mongoose');
require("dotenv").config();


const ConnectDB = () => {
    mongoose.connect(process.env.mongourl);
    .then(() => console.log("Databse connecterd"));
    .catch((err) => console.log(err));
}
    
module.exports = ConnectDB;