const mongoose = require('mongoose')

const distributeSchema =  mongoose.Schema({
    roll:{type:String,required:true},
    foodName:{type:String,required:true},
    date:{type:String,required:true},
    shiftment:{type:String,required:true},
    Status:{type:String,required:true},
},{timestamps:true})

const distributeModel = mongoose.model('distribution',distributeSchema)
module.exports = distributeModel;

