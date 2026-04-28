const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    conpany: String,
    location: String,
    salary: Number,
    isFavorite: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model("Job", jobSchema);