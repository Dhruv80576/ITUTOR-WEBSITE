const express =  require("express");
const { Student } = require("../models/student.model");
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const student = await Student.findById(id);
        await res.status(200).json({student});
    } catch (error) {
        console.log(error);
    }
});

module.exports= router;