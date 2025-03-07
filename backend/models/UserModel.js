const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const saltRounds = 10

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        maxLength: 50,
        trim: true,
        required: true
    },
    password: {
        type: String,
        maxLength: 100,
        trim: true,
        required: true
    },
    email:{
        type: String, 
        trim: true,
        require: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail, 
            message: "Invalidate Email Format"
        }
    },
    age: {
        type: Number, 
        required: false,
    },
    // currently on capable of ft'in
    height: {
        feet: { type: Number, required: false, min: 1, max: 8},
        inches: { type: Number, required: false, min:0, max: 11}
    },
    // currently on capable of ibs
    weight: {
        type: Number,
        required: false,
        min: 50, 
        max: 600
    },
    gender: {
        type: String,
        required: false,
        enum: ["male", "female", "other"]
    },
    goals:{
        type: String, 
        enum: ["weight loss", "muscle gain", "maintenance"], 
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

UserSchema.pre("save", async function(next){
    try {
        const salt = await bcrypt.genSalt(saltRounds)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.comparePassword = async function (candidatePassword){
    return bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("User", UserSchema)