const express = require('express')
const router = express.Router()
const roleController = require('./api/roleController')

//Role api router
router
    .route("/getAllRole")
    .get(roleController.getAllRole)
    .post(roleController.getAllRole)

router
    .route("/addOrEditRole")
    .get(roleController.addOrEditRole)
    .post(roleController.addOrEditRole)

module.exports = router
