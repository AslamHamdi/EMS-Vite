require('dotenv').config({ path: __dirname + '../.env' })

const db = require('../config/db')
const fs = require('fs');
const path = require('path');

const moment = require('moment/moment');

class Post {
    contructor() {

    }

    async getAllEmployee(payload) {
        let data = payload.body.data

        let sql = `call ems.sp_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                                        ?, ?, ?, ?, ?,
                                        ?, ?, ?,
                                        @employeeId2); 
                                        SELECT @employeeId2;`
        const result = await db.query(sql,
            [1, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null,
                null, null, null,
                null],
            function (err, result) {
                if (err) {
                    console.error("ERROR: ", err)
                } else {
                    console.log("RESULT: ", result)
                }
            }
        );

        let returner = result[0][0]
        console.log("RESULT ALL EMPLOYEE: ", returner)
        //let result = ""
        return returner
    }

    async getEmployeeById(payload) {
        let data = payload.body.data
        console.log("DATA: ", data)

        let sql = `call ems.sp_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                                        ?, ?, ?, ?, ?,
                                        ?, ?, ?,
                                        @employeeId2); 
                                        SELECT @employeeId2;`
        const result = await db.query(sql,
            [2, data.employeeId, 1, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null,
                null, null, null,
                null],
            function (err, result) {
                if (err) {
                    console.error("ERROR: ", err)
                } else {
                    console.log("RESULT: ", result)
                }
            }
        );

        let dbData = result[0][0][0]
        let returner = {
            userForm: {
                model: {
                    fName: dbData.fName,
                    lName: dbData.lName,
                    dateOfBirth: moment(dbData.birthDate).format('YYYY-MM-DD'),// dbData.birthDate,
                    gender: dbData.gender,
                    icNum: dbData.icNum,
                    address: dbData.address,
                    country: dbData.country,
                    state: dbData.state,
                    city: dbData.city,
                    zip: dbData.zip,
                    maritalStatus: dbData.maritalStatus,
                    phoneNum: dbData.phoneNumber,
                    profilePicture: dbData.profilePicture
                }
            },
            companyForm: {
                model: {
                    emailAddress: dbData.emailAddress,
                    employeeId: dbData.employeeId,
                    dateReg: moment(dbData.dateReg).format('YYYY-MM-DD'),// dbData.dateReg, 
                    department: dbData.deptId,
                    position: dbData.roleId,
                }
            },
            emergencyForm: {
                model: {
                    name: dbData.emergencyName,
                    relationship: dbData.emergencyRelationship,
                    phoneNum: dbData.emergencyPhoneNum
                }
            },
            idd: dbData.idd
        }
        console.log("RESULT EMPLOYEE BY ID: ", returner)
        //let result = ""
        return returner
    }

    async addOrEditEmployee(payload) {
        let data = JSON.parse(payload.body.data)
        let uploadedImage;
        let uploadPath;
        let filePathDb = ""

        uploadPath = `../public/company_files/company_name/user_files/${data.userForm.fName + '_' + data.userForm.lName}/`;

        if (payload.files && Object.keys(payload.files).length > 0) {
            uploadedImage = payload.files.image;

            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }

            fs.readdir(uploadPath, function (err, files) {
                if (err) {
                    // some sort of error
                } else {
                    if (!files.length) {
                        // directory appears to be empty 
                    } else {
                        for (const file of files) {
                            fs.unlink(path.join(uploadPath, file), (err) => {
                                if (err) throw err;
                            });
                        }
                    }
                }
            });

            uploadedImage.mv(uploadPath + uploadedImage.name, function (err) {
                if (err) {
                    console.log("FILE FAILED UPLOADED")
                } else {
                    console.log("FILE UPLOADED")
                }
            })
            filePathDb = 'company_name/user_files/' + data.userForm.fName + '_' + data.userForm.lName + '/' + uploadedImage.name
        }

        let sql = `call ems.sp_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
                                        ?, ?, ?, ?, ?,
                                        ?, ?, ?,
                                        @employeeId2); 
                                        SELECT @employeeId2;`
        const result = await db.query(sql,
            [3, data.companyForm.employeeId, 1, data.userForm.fName, data.userForm.lName, new Date(data.userForm.dateOfBirth), data.userForm.gender, data.userForm.icNum, data.userForm.address, data.userForm.country, data.userForm.state, data.userForm.city, data.userForm.zip, data.userForm.maritalStatus, data.userForm.phoneNum, filePathDb,
                data.companyForm.emailAddress, new Date(data.companyForm.dateReg), data.companyForm.department, data.companyForm.position, data.companyForm.password,
                data.emergencyForm.name, data.emergencyForm.relationship, data.emergencyForm.phoneNum,
                null],
            function (err, result) {
                if (err) {
                    console.error("ERROR: ", err)
                } else {
                    console.log("RESULT: ", result)
                }
            }
        );
        //let result = ""
        return result
    }

    async deleteEmployee(payload) {
        let data = payload.body.data
        console.log("DELETE DATA: ", data)
        let sql = `call ems.sp_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
            ?, ?, ?, ?, ?,
            ?, ?, ?,
            @employeeId2); 
            SELECT @employeeId2;`
        const result = await db.query(sql,
            [4, data.employeeId, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null,
                null, null, null,
                null],
            function (err, result) {
                if (err) {
                    console.error("ERROR: ", err)
                } else {
                    console.log("RESULT: ", result)
                }
            }
        );
        return result
    }
}

module.exports = Post