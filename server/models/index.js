const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/quiz', { useNewUrlParser: true })

module.exports.User = require('./user')
module.exports.Question = require('./question')