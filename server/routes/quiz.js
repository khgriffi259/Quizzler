const router = require('express').Router()
const handle = require('../handlers')
const auth = require('../middlewares/auth')

router.route('/')
    .get(handle.getQuestions)

router.route('/:id')
    .get(auth, handle.getQuestion)
    .post(auth, handle.vote)

module.exports = router