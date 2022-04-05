const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    login: String,
    password: String,
})

const Model = mongoose.model('user', schema)

module.exports = Model