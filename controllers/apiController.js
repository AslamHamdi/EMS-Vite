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

router
    .route("/getRoleById")
    .get(roleController.getRoleById)
    .post(roleController.getRoleById)

router
    .route("/deleteRole")
    .get(roleController.deleteRole)
    .post(roleController.deleteRole)

router
    .route("/getEmployeesByRole")
    .get(roleController.getEmployeesByRole)
    .post(roleController.getEmployeesByRole)
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

router
    .route("/getDepartmentById")
    .get(departmentController.getDepartmentById)
    .post(departmentController.getDepartmentById)

router
    .route("/deleteDepartment")
    .get(departmentController.deleteDepartment)
    .post(departmentController.deleteDepartment)

router
    .route("/getEmployeesByDepartment")
    .get(departmentController.getEmployeesByDepartment)
    .post(departmentController.getEmployeesByDepartment)

/* #endregion */

/* #region Employee api router*/
router
    .route("/getAllEmployee")
    .get(employeeController.getAllEmployee)
    .post(employeeController.getAllEmployee)

router
    .route("/getEmployeeById")
    .get(employeeController.getEmployeeById)
    .post(employeeController.getEmployeeById)

router
    .route("/addOrEditEmployee")
    .get(employeeController.addOrEditEmployee)
    .post(employeeController.addOrEditEmployee)

router
    .route("/deleteEmployee")
    .get(employeeController.deleteEmployee)
    .post(employeeController.deleteEmployee)

/* #endregion */

module.exports = router
