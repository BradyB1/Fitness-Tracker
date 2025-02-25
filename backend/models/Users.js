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
    // return to edit for ft'in -- currently set for cm 
    height: {
        type: Number, 
        required: false,
    },
    // return to edit for ibs -- currently set for cm
    weight: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
        enum: ["Male", "Female"]
    },
    goals:{
        type: String, 
        enum: ["Weight loss", "Muscle Gain", "Maintenance"], 
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
        this.password = await bcrypt.hash(candidatePassword, this.password)
        next()
    } catch (error) {
        next(error)
    }
})

UserSchema.methods.comparePassword = async function (candidatePassword){
    return bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model("User", UserSchema)