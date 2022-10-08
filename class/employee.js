require('dotenv').config({ path: __dirname + '../.env' })

const db = require('../config/db')
const fs = require('fs');
const path = require('path');

class Post {
    contructor() {

    }

    async getAllEmployee() {
        let result = {
            text: "HELLO THERE"
        }
        return result
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
            [2, data.companyForm.employeeId, 1, data.userForm.fName, data.userForm.lName, new Date(data.userForm.dateOfBirth), data.userForm.gender, data.userForm.icNum, data.userForm.address, data.userForm.country, data.userForm.state, data.userForm.city, data.userForm.zip, data.userForm.maritalStatus, data.userForm.phoneNum, filePathDb,
                data.companyForm.emailAddress, new Date(data.companyForm.dateReg), 1, 1, data.companyForm.password,
                data.emergencyForm.name, data.companyForm.relationship, data.companyForm.phoneNum,
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
}

module.exports = Post