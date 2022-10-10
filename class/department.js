const db = require('../config/db')
const fs = require('fs');
const path = require('path');

class Post {
    contructor() {

    }

    async getAllDepartment(payload) {
        let sql = "call ems.sp_department(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @companyId2); SELECT @companyId2;"
        const result = await db.query(sql,
            [1, null, null, null, 1, null, null, null, null, null, null, null],
            function (err, result) {
                if (err) {
                    console.error("ERROR: ", err)
                } else {
                    console.log("RESULT: ", result)
                }
            }
        );

        let dbData = result[0][0]
        let returner = dbData
        console.log("DB DATA DEPT: ", returner)
        return returner
    }

    async addOrEditDepartment(payload) {
        let data = JSON.parse(payload.body.data)
        let uploadedImage;
        let uploadPath;
        let filePathDb = ""

        uploadPath = `../public/company_files/company_name/department/${data.deptName}/`;

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
            filePathDb = 'company_name/department/' + data.deptName + '/' + uploadedImage.name
        }

        let sql = "call ems.sp_department(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @companyId2); SELECT @companyId2;"
        const result = await db.query(sql,
            [2, data.deptName, data.deptId, 1, 1, data.officeAddress, data.deptDesc, data.createdDate, data.lastEditedDate, 1, filePathDb, null],
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