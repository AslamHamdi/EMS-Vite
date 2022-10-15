const db = require('../config/db')
const fs = require('fs');
const path = require('path');

class Post {
    contructor() {

    }

    async getAllRole() {
        let sql = "call ems.sp_role(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @companyId2); SELECT @companyId2;"
        const result = await db.query(sql,
            [1, null, null, null, 1, 1, null, null, null, null, null, null, null],
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
        // console.log("DB DATA ROLE: ", returner)
        return returner
    }

    async addOrEditRole(payload) {
        console.log(payload.body.data)
        let data = JSON.parse(payload.body.data)
        let uploadedImage;
        let uploadPath;
        let filePathDb = ""

        uploadPath = `../public/company_files/company_name/role/${data.roleName}/`;

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
            filePathDb = 'company_name/role/' + data.roleName + '/' + uploadedImage.name
        }

        let sql = "call ems.sp_role(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @companyId2); SELECT @companyId2;"
        const result = await db.query(sql,
            [2, data.roleName, data.roleId, 1, 1, 1, data.officeAddress, data.roleDesc, new Date(data.createdDate), new Date(data.lastEditedDate), 1, filePathDb, null],
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