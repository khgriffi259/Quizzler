const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    option: String,
    votes: {
        type: Number,
        default: 0
    }
})

const resultsSchema = new mongoose.Schema({
    result: String,
    count: {
        type: Number,
        default: 0
    }
})

const questionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: String,
    options: [optionSchema],
    answered: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    created: {
        type: Date,
        default: Date.now
    },
    correctAnswer: String,
    results: [resultsSchema]
})

module.exports = mongoose.model('Question', questionSchema)