const jwt = require('jsonwebtoken')

const db = require('../models')

exports.register = async (req, res, next) => {
   try {
        const { firstName, lastName } = req.body
        const initials = firstName[0].toUpperCase() + lastName[0].toUpperCase()
        const { id, username } = await db.User.create({...req.body, initials})

        const token = jwt.sign({id, username, initials}, process.env.SECRET)
        
        res.status(201).json({id, username, initials, token})
    } catch (err) {
        if (err.code === 11000)    {
            err.message = "Sorry that username is already taken"
        }
        next(err)
    } 
}

exports.login = async (req, res, next) => {
    try {
        const user  = await db.User.findOne({username: req.body.username})
        const { id, username, initials } = user
        
        const valid = await user.comparePasswords(req.body.password)
        
        if (valid) {
            console.log('test')
            const token = jwt.sign({id, username, initials}, process.env.SECRET)
            res.json({ id, username, initials, token })
        } else {
           throw new Error()
        }
    } catch (err) {
        err.message = "Invalid username/password"
        err.status = 400
        next(err)
    }
}