const Nutrition = require("../models/NutritionModel")
const NutritionSchema = require("../models/NutritionModel")
const validateNutritionData = require("../utils/validateNutrition")

const validateNutrition = async (req, res) => {
    try {
        const { userId, foodName, calories, protein, carbs, fats } = req.body

        const errors = validateUserData(userId, foodName, calories, protein, carbs, fats)

        if (errors.length > 0){
            return res.status(400).json({message: errors})
        }
        
    } catch (error) {
        res.status(400).json({ message: "Server Error", error})
    }
}