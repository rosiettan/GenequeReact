const mongoose = require('mongoose')

const viewSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const View = mongoose.model("surveys", viewSchema)
module.exports = View