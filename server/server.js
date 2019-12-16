require('dotenv').config()

const express = require('express')
const app = express()

const handle = require('./handlers')
const routes = require('./routes')

const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.use('/api/auth', routes.auth)
app.use('/api/quiz', routes.quiz)

app.use(handle.notFound)
app.use(handle.errors)

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})