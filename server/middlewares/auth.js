// -***************   JWT MIDDLEWARE ************************

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                err.message = 'Failed to authenticate token'
                err.status = 400
                next(err)
            } else {
                req.decoded = decoded
                next()
            }
        })
    } else {
        const err = new Error('no token provided')
        err.status = 400
        next(err)
    }
}


// -***************   JWT MIDDLEWARE ************************