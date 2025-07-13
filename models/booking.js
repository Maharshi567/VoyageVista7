const mongoose = require('mongoose');

const bookingSchema =new mongoose.Schema({

    Headname:String,
    Heademail:String,
    Phonenumber:String,
    Placetovisit:String,
    Advancedate:Date,
    Days:Number,
    Numberofpeople:Number,
})

const bookingModel = mongoose.model('Booking',bookingSchema);

module.exports = bookingModel;