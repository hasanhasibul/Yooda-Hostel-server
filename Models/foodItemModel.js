const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    foodName:{type:String,required:true},
    foodPrice:{type:String,required:true},
},{timestamps:true}
)

const foodItemModel = mongoose.model('foodItem',foodSchema);
module.exports = foodItemModel ;