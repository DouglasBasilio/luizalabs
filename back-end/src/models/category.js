const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
})

const Model = mongoose.model('category', schema)

module.exports = Model