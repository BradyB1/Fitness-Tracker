const mongoose = require("mongoose")

const ProgressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    weight: {
        type: Number, 
        required: false
    },
    bodyFatPercentage: {
        type: Number, 
        required: false,
    },
    muscleMass: {
        type: Number, 
        required: false
    },
    strengthLevel:{
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }

}, {timestamps: true})

module.exports = mongoose.model("Progress", ProgressSchema)