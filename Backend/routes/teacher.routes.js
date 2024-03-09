const express =  require("express");
const { Teacher } = require("../models/teacher.model");
const {addScheduling, changePricing, ratingByStudents} = require("../controllers/others.controller");
const router = express.Router();

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    const teacher = await Teacher.findOne({_id:id});
    await res.status(200).json({teacher});
});

router.put('/schedule/:id', addScheduling);
router.put('/price/:id', changePricing);
router.put('/rating/:id', ratingByStudents);
module.exports= router;