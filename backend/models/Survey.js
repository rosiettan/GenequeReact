const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const Survey = mongoose.model("Survey", surveySchema)
