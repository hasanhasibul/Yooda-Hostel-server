
const express = require('express');
const router = express.Router();
const Student = require('../Models/studentModel')

router.get("/getStudent", async (req, res) => {
    try {
        const student = await Student.find();
        res.send(student);
    } catch (error) {
        return res.status(400).json(error);
    }
});


router.post('/addStudent', async (req, res) => {
    try {
        const newStudent = new Student(req.body)
        await newStudent.save()
        res.send("student added succesfully ")
    } catch (error) {
        return res.status(400).json(error);
    }
})

router.post('/searchByRoll', async (req, res) => {
    console.log(req.body);
    try {
        const student =  await Student.find({roll:req.body.roll})
        res.send(student)

    } catch (error) {
        return res.status(400).json(error);
    }
})

router.post("/deleteStudent", async (req, res) => {
    console.log(req.body.studentId);
    try {
      await Student.deleteMany({ _id: req.body.studentId });
  
      res.send("student deleted successfully");
    } catch (error) {
      return res.status(400).json(error);
    }
  });

 router.put("/changeStatus", async (req, res) => {
    const result = await Student.updateMany(
      { _id: req.body.studentId },
      {
        $set: {
          status: req.body.update,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
      (err) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            message: "student was updated successfully!",
          });
        }
      }
    );
    console.log(result);
  });

module.exports = router;