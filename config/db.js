const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/DataBase').then(()=>{
    console.log('connected to DB')
})

module.exports = connection