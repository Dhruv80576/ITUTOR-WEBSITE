const bcrypt = require("bcryptjs/dist/bcrypt");
const { Teacher } = require("../models/teacher.model");
const { Student } = require("../models/student.model");
const { generateJWTtoken } = require("../utils/generateToken");

const signup = async (req, res) => {
    try {
        let {fullName, userName, email, password, confirmPassword, profilePic, gender, language, cost, permissionType, experience} = req.body;
        if(password !== confirmPassword) {
            res.status(400).json({error: "Password is not matching with confirmPassword"});
        }
        const existingEmail = await Teacher.findOne({ email });
        const existingTeacher = await Teacher.findOne({ userName });
        if(existingEmail) {
            return res.status(400).json({error: "Email already registered"});
        }
        if(existingTeacher) {
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
        const newTeacher = new Teacher({
            fullName, 
            userName, 
            email, 
            password: hashedPassword, 
            profilePic,
            gender,
            language,
            permissionType,
            cost,
            experience
        });
        if(newTeacher){
            await newTeacher.save();
            generateJWTtoken(newTeacher._id, res);
            await res.status(200).json({
                _id: newTeacher.id,
                fullName: newTeacher.fullName,
                userName: newTeacher.userName,
                email: newTeacher.email,
                password: newTeacher.password,
                profilePic: newTeacher.profilePic,
                gender: newTeacher.gender,
                language: newTeacher.language,
                permissionType: newTeacher.permissionType,
                cost: newTeacher.cost,
                experience: newTeacher.experience
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
        const existingTeacher = await Teacher.findOne({ email });
        const existingStudent = await Student.findOne({ email });

        if (!existingTeacher && !existingStudent) {
            return res.status(400).json({ error: "User does not exist" });
        }

        let user = existingTeacher || existingStudent;

        const matchingPassword = await bcrypt.compare(password, user.password);
        if(matchingPassword){
            // console.log("Login Successfull");
            generateJWTtoken(user._id, res);
            await res.status(200).json({
                user:user,
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