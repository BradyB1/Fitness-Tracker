const mongoose = require("mongoose")

const GoalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    goalType: {
        type: String,
        enum: ["Weight Loss", "Muscle Gain", "Strength", "Endurance"],
        required: true
    },
    targetValue: {
        type: Number,
        required: true
    },
    currentProgress:{
        type: Number, 
        default: 0
    },
    deadline: {
        type: Date,
        required: false
    },
    completed: {
        type: "Boolean",
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("Goal", GoalSchema)