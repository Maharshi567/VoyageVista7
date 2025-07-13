const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    UserName:String,
    Email:String,
    PlaceName:String,
    SportName:String,
    Date:Date,
    Review:String,
})

const reviewModel = mongoose.model('Review',reviewSchema)

module.exports = reviewModel;