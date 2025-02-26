
const validateNutrition = (userId, foodName, calories, protein, carbs, fats) =>{
    if(typeof foodName !== "string"){
        errors.push("Food name must be a string.")
    }

    if(typeof calories !== "number"){
        errors.push("Caloric input must be numerical")
    }

    if(typeof protein !== "number"){
        errors.push("Protien input must be numerical")
    }

    if(typeof carbs !== "number"){
        errors.push("Carbs input must be numerical")
    }

    if(typeof fats !== "number"){
        errors.push("Fats input must be numerical")
    }

 
    
}

module.exports = validateNutritionData;