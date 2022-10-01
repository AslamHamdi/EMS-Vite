const express = require('express')
const router = express.Router()
const roleController = require('./api/roleController')
const departmentController = require('./api/departmentController')

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


module.exports = router
