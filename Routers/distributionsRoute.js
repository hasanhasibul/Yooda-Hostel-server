const express = require('express');
const router = express.Router();
const Distribution = require('../Models/distributeModel.')


router.get("/getDistribution ", async (req, res) => {
    try {
      const foods = await foodItem.find();
      res.send(foods);
    } catch (error) {
      return res.status(400).json(error);
    }
  });

  router.post('/addDistribuiton', async(req, res) => {
    try {
        const newFoodItem = new Distribution(req.body);
        await newFoodItem.save();
        res.send("new Food Item added successfully");
        
    } catch (error) {
        return res.status(400).json(error);
    }
})



module.exports = router;