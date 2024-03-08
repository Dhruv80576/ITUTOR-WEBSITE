const bcrypt = require("bcryptjs/dist/bcrypt");
const { Teacher } = require("../models/teacher.model");
const { generateJWTtoken } = require("../utils/generateToken");

const signup = async (req, res) => {
    try {
        let {fullName, userName, email, password, confirmPassword, profilePic, gender, language, proficiency} = req.body;
        if(password !== confirmPassword) {
            res.status(400).json({error: "Password is not matching with confirmPassword"});
        }
        const existingEmail = await Teacher.findOne({ email });
        const existingUser = await Teacher.findOne({ userName });
        if(existingEmail) {
            return res.status(400).json({error: "Email already registered"});
        }
        if(existingUser) {
            return res.status(400).json({error: "User name is already used"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        if(gender === 'male'){ 
            profilePic = boyProfilePic;
        }
        else{
            profilePic= girlProfilePic;
        }
        const newUser = new Teacher({
            fullName, 
            userName, 
            email, 
            password: hashedPassword, 
            profilePic,
            gender,
            language,
            proficiency
        });
        if(newUser){
            await newUser.save();
            generateJWTtoken(newUser._id, res);
            await res.status(201).json({
                _id: newUser.id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                email: newUser.email,
                password: newUser.password,
                profilePic: newUser.profilePic,
                gender: newUser.gender,
                language: newUser.language,
                proficiency: newUser.proficiency
            });
        }
        else {
            res.status(400).json({error: "Invalid User Data"});
        }
    } catch (error) {
        console.log("error in signup controller ", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {signup}