const db = require('../models')

exports.getQuestions = async (req, res, next) => {
    try {
        const questions = await db.Question.find().populate('user', ['id', 'username'])

        res.send(questions)
    } catch (err) {
        err.status = 400
        next(err)
    }
}

exports.getQuestion = async (req, res, next) => {
    const { id } = req.params
    try {
        const question = await db.Question.findById(id)
            .populate('user',['id', 'username'])
            .populate('answered',['id', 'username'])
        if (!question) {
            throw new Error('no question found')
        }
        res.send(question)
    } catch (err) {
        err.status = 400
        next(err)
    }
}


exports.vote = async (req, res, next) => {
    const { id: userId } = req.decoded
    const { id: questionId } = req.params
    const { answer } = req.body
    try {
        if (answer){
            const question = await db.Question.findById(questionId)
            //map through options and tally the option that matches the answer
            const vote = question.options.map(option => {
                return option.option === answer 
                    ? {...option.toObject(), votes: option.toObject().votes + 1 }
                    : option
            })
            
            if (question.correctAnswer === answer) {
                question.results.forEach(result => {
                    if (result.result === 'right') {
                        result.count += 1
                    }
                })
            } else {
                question.results.forEach(result => {
                    if(result.result === 'wrong') {
                        result.count += 1
                    }
                })
            }
                
            if (question.answered.indexOf(userId) === -1) {
                question.answered.push(userId)
                question.options = vote
                await question.save()
                res.send(question)
            } else {
                throw new Error("Already voted!")
            } 
        } else {
            throw new Error("No answer provided")
        }
    } catch (err) {
        err.status = 400
        next(err)
    }
}