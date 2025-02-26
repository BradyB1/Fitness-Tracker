const validator = require("validator");

const validateUserData = (username, password, email, age, height, weight, gender, goals) => {
    const errors = [];

    // Check if all fields exist
    if (!username || !password || !email) {
        errors.push("All fields are required.");
    }

    //Username validation
    if (typeof username !== "string") {
        errors.push("Username must be a string.");
    }
    if (username.length < 3) {
        errors.push("Username must be at least 3 characters.");
    }
    if (username.length > 15) {
        errors.push("Username cannot be greater than 15 characters.");
    }

    // Password validation
    if (typeof password !== "string") {
        errors.push("Password must be a string.");
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters.");
    }
    if (password.length > 30) {
        errors.push("Password cannot be greater than 30 characters.");
    }

    // Email validation
    if (!validator.isEmail(email)) {
        errors.push("Invalid email format.");
    }

    // Age Validation
    if(age >= 110){
        errors.push("Please enter a valid age")
    }
    if(age <= 10){
        errors.push("Sorry Age must be greater than 10.")
    }

    //height validation
    if(typeof height !== "number"){
        errors.push("Height Must be a number, how did you break this.")
        console.log("You really messed up the height input control")
    }

    // weight validation 
    if (typeof weight !== "number"){
        errors.push("Weight must be a number, how did you break this")
        console.log("You really messed up the weight input control")
    }
    
    // gender validation
    if(gender !== "string"){
        errors.push("Fix your code")
    }

    if (gender !== "male" || gender !== "female" || gender !== "other" ){
        errors.push("Please select Male or Female.")
    }

    // Goals validation
    if (goals !== "string"){
        errors.push("I have no idea how you inputted something that wasn't a string")
    }

    return errors;
};

module.exports = validateUserData;
