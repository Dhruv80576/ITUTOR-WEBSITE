const bcrypt = require("bcryptjs/dist/bcrypt")
const { Teacher } = require("../models/teacher.model")

const searchTeacher = async (req, res) => {
    try{
        let { name, cost, experience, language } = req.query;
        
        let conditions = [];
        
        if (name) {
            conditions.push({ fullName: new RegExp(name, 'i') });
        }
        
        if (cost) {
            conditions.push({ cost: new RegExp(cost, 'i') });
        }
        
        if (experience) {
            conditions.push({ experience: new RegExp(experience, 'i') });
        }
        
        if (language) {
            conditions.push({ language: new RegExp(language, 'i') });
        }
        let teachers;
        if (conditions.length === 0) {
            teachers = await Teacher.find();
        }
        else{
            teachers = await Teacher.find({ $or: conditions });
        }
        
        if (teachers.length === 0) {
            return res.status(404).json({ success: false, error: 'No teachers found with the given name' });
        }
        
        return res.status(200).json({success: true, data: teachers})
    }catch(error){
        console.log("Error in search functionality", error);
        res.status(500).json({error: "Internal Server Error"});
    }
}

module.exports = {searchTeacher}