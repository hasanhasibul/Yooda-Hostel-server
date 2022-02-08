const mongoose = require('mongoose');
const connection = mongoose.connection ;
function connectDB(){
    mongoose.connect('mongodb+srv://carRental:carRental123123@cluster0.ezexp.mongodb.net/hostel',{useUnifiedTopology:true,useNewUrlParser:true})
    connection.on('connected',()=>{
        console.log("Mongodb Connection successfully");
    })
    connection.on('error',()=>{
        console.log("Mongodb Connection error");
    })
}
connectDB();

module.exports = mongoose 