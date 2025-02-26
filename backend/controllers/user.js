const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const validator = require("validator")
const UserSchema = require("../models/UserModel")
const validateUserData = require("../utils/validateUser")

const validateUser = async(req, res) =>{
    try {
        const { username, password, email, age, height, weight, goals } = req.body

        const errors = validateUserData(username, password, email, age, height, weight, goals)

        if (errors.length > 0){
            return res.status(400).json({message: errors})

        }
    } catch (error) {
        res.status(500).json({message: "Server Error", error})
    }
}
// create
exports.addUser = async (req, res) =>{
    try {
        const { username, password, email, age, height, weight, gender, goals } = req.body

        const existingUser = await User.findOne({ email })
        if(existingUser){
            return res.status(400).json({ message: "Email is already in use." })
        }
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new User({ username, password: hashedPassword, email, age, height, weight, gender, goals} )
        await user.save();

        res.status(201).json({ message: "User created successfully", userId: user._id })
        // console.log("User Created", existingUser)
    } catch (error) {
        res.status(500).json({message: "Server Error", error: error.message})
    }
}

// read
exports.getUser = async(req,res) =>{
    try {
        const { id } = req.params

        if(!id.match(/^[0-9a-fA-F]{24}$/)){
            return res.status(400).json({ message: "Invalid user ID format"})
        }

        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({message: "User not Found"})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Server Error", error})
    }
    
}

// update
exports.updateUser = async(req, res)=>{
    const { id } = req.params
    const { username, password, email, age, weight, height, goals} = req.body
}
//delete
