const express = require('express');
const router = express.Router();
const foodItem = require('../Models/foodItemModel')


router.get("/getFood", async (req, res) => {
    try {
      const foods = await foodItem.find();
      res.send(foods);
    } catch (error) {
      return res.status(400).json(error);
    }
  });


router.post('/addFood', async(req, res) => {
    try {
        const newFoodItem = new foodItem(req.body);
        await newFoodItem.save();
        res.send("new Food Item added successfully");
    } catch (error) {
        return res.status(400).json(error);
    }
})

module.exports = router;