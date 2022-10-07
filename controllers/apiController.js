require('dotenv').config({ path: __dirname + '../../.env' })

const express = require('express')
const router = express.Router()
const roleController = require('./api/roleController')
const departmentController = require('./api/departmentController')
const employeeController = require('./api/employeeController')


/* #region Role api router*/
router
    .route("/getAllRole")
    .get(roleController.getAllRole)
    .post(roleController.getAllRole)

router
    .route("/addOrEditRole")
    .get(roleController.addOrEditRole)
    .post(roleController.addOrEditRole)
/* #endregion */

/* #region Department api router*/
router
    .route("/getAllDepartment")
    .get(departmentController.getAllDepartment)
    .post(departmentController.getAllDepartment)

router
    .route("/addOrEditDepartment")
    .get(departmentController.addOrEditDepartment)
    .post(departmentController.addOrEditDepartment)
/* #endregion */

/* #region Employee api router*/
router
    .route("/getAllEmployee")
    .get(employeeController.getAllEmployee)
    .post(employeeController.getAllEmployee)

router
    .route("/addOrEditEmployee")
    .get(employeeController.addOrEditEmployee)
    .post(employeeController.addOrEditEmployee)

/* #endregion */

module.exports = router
