const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    profilePic: {type: String},
    gender: {type: String, required: true, enum: ["male", "female"]},
    language: {type: String, required: true},
    permissionType: {type: String, required: true, enum: ["Student", "Teacher"]},
    cost: {type: String},
    experience: {type: String},
    classes: {type: Number, default: 0},
    studentsTaught: {type: Number, default: 0},
    ratings: [{
        type: Number,
        required: true,
    }],
    schedule: [{
        date: {type: String, required: true},
        startingTime: { type: String, required: true },
        duration: { type: String, required: true } // Duration in minutes
    }],
    date: {type: Date, createdAt: Date.now()}
}, {timestamps: true})

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = {Teacher}