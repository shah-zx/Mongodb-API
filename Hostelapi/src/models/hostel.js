const mongoose = require('mongoose');
const validator = require('validator');
const hostelSchema = new mongoose.Schema({

name : {
    type : String,
    required : true,
    unique : true,
} , 
Rooms : {
    type : Number,
    required : true,

} , 
Beds : {
    type : Number,
    required : true,
    unique: true , 
}

})

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;