require('dotenv').config({path: __dirname + '../.env'})
const express = require("express")
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', require('./apiController'))

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));