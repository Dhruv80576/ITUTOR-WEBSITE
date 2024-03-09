const bcrypt = require("bcryptjs/dist/bcrypt");
const { Student } = require("../models/student.model");
const { generateJWTtoken } = require("../utils/generateToken");

const signup = async (req, res) => {
    try {
        let {fullName, userName, email, password, confirmPassword, profilePic, gender, permissionType} = req.body;
        if(password !== confirmPassword) {
            res.status(400).json({error: "Password is not matching with confirmPassword"});
        }
        const existingEmail = await Student.findOne({ email });
        const existingStudent = await Student.findOne({ userName });
        if(existingEmail) {
            return res.status(400).json({error: "Email already registered"});
        }
        if(existingStudent) {
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
        const newStudent = new Student({
            fullName, 
            userName, 
            email, 
            password: hashedPassword, 
            profilePic,
            gender,
            permissionType
        });
        if(newStudent){
            await newStudent.save();
            generateJWTtoken(newStudent._id, res);
            await res.status(200).json({
                _id: newStudent.id,
                fullName: newStudent.fullName,
                userName: newStudent.userName,
                email: newStudent.email,
                password: newStudent.password,
                profilePic: newStudent.profilePic,
                gender: newStudent.gender,
                permissionType: newStudent.permissionType
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

const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        const existingStudent = await Student.findOne({ email });
        if(!existingStudent) {
            return res.status(400).json({error: "User already registered"});
        }
        const matchingPassword = await bcrypt.compare(password, existingStudent.password);
        if(matchingPassword){
            // console.log("Login Successfull");
            generateJWTtoken(existingStudent._id, res);
            await res.status(200).json({
                user:existingStudent,
                message: "Login Successfull"}
            );
        }
        else{
            await res.status(404).json({
                error: "Login Unsuccessfull"
            })
        }
    } catch (error) {
        console.log("error in login controller ", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logout successfully"});
    } catch (error) {
        console.log("error in logout controller ", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {signup, login, logout}