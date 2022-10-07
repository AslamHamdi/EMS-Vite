require('dotenv').config({ path: __dirname + '../../.env' })
const express = require("express")
const fileUpload = require('express-fileupload');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload());

app.use('/userAssets', express.static(path.join(__dirname, '../app_data/user_files/')));

app.use('/api/v1', require('./apiController'))

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));