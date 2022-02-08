const mongoose = require('mongoose')

const studentSchema =  mongoose.Schema({
    fullName:{type:String,required:true},
    roll:{type:String,required:true},
    age:{type:String,required:true},
    class:{type:String,required:true},
    hallName:{type:String,required:true},
    status:{type:String,required:true},
},{timestamps:true})

const studentModel = mongoose.model('students',studentSchema)
module.exports = studentModel;

