const { Teacher } = require("../models/teacher.model");

const addScheduling = async (req, res)=>{
    try {
        const id = req.params.id;
        const { date, startingTime, duration } = req.body;
        console.log(id);
        const updatedTeacher = await Teacher.findOneAndUpdate(
          { _id: id}, 
          {
            $push: { 
              schedule: {
                date: new Date(date),
                startingTime,
                duration: parseInt(duration)
              }
            }
          },
          { new: true }
        );
        res.status(200).json({ success: true, data: updatedTeacher });
      } catch (error) {
        console.error('Error updating teacher schedule:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

const changePricing = async (req, res) => {
    try {
        const id = req.params.id;
        const { cost } = req.body;
        const updatedTeacher = await Teacher.findOneAndUpdate(
          { _id: id}, 
          {
            cost: cost
          },
          { new: true }
        );
        res.status(200).json({ success: true, data: updatedTeacher });
      } catch (error) {
        console.error('Error updating teacher schedule:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

const ratingByStudents = async (req, res) => {
    try {
        const id = req.params.id;
        const { rating } = req.body;
        const updatedTeacher = await Teacher.findOneAndUpdate(
          { _id: id}, 
          { $push: { ratings: rating } },
          { new: true }
        );
        res.status(200).json({ success: true, data: updatedTeacher });
      } catch (error) {
        console.error('Error updating teacher schedule:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

module.exports = {addScheduling, changePricing, ratingByStudents}