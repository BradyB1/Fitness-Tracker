const mongoose = require("mongoose")


const WorkoutSchema = new mongoose.Schema({
    
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    exercises: [
        {
            name: {
                type: String, 
                required: true
            },
            sets: {
                type: Number,
                required: true
            },
            reps: {
                type: Number, 
                required: true
            },
            weight: {
                type: Number
            }
        }
    ],
    duration: {
        type: Number
    },
    date: {
        type: Date, default: Date.now
    }

})

module.exports = mongoose.model("Workout", WorkoutSchema)