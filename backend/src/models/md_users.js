import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type : String,
        required : true,
        trim: true,
        unique: true,
        lowercase: true,
    }
},  {
    timestamps: true
})

module.exports = model('userModel', userSchema)