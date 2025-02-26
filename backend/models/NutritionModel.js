const mongoose = require(mongoose)

const NutritionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    foodName: {
        type: String,
        required: true
    },
    calories: {
        type: Number, 
        required: true
    },
    protein: {
        type: Number, 
        required: false
    },
    carbs: {
        type: Number, 
        required: false
    },
    fats: {
        type: Number,
        required: false,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Nutrition", NutritionSchema)