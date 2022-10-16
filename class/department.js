const { type } = require('os');
const db = require('../config/db')
const ems = require('../lib/ems')

class Post {
    contructor() {

    }

    async getAllDepartment(payload) {
        let sql = `call ems.sp_department(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?,
            @companyId2); 
            SELECT @companyId2;`
        const result = await db.query(sql,
            [1, null, null, null, 1, null, null, null, null, null, null,
                null,
                null],
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
        //console.log("DB DATA DEPT: ", returner)
        return returner
    }

    async getDepartmentById(payload) {
        let data = payload.query.data
        console.log("DATA: ", payload.query)
        let sql = `call ems.sp_department(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?,
            @companyId2); 
            SELECT @companyId2;`
        const result = await db.query(sql,
            [2, null, data, null, 1, null, null, null, null, null, null,
                null,
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
            deptForm: {
                model: {
                    deptName: dbData.departmentName,
                    deptId: dbData.departmentId,
                    deptLeader: dbData.departmentLeadId,
                    officeAddress: dbData.officeAddress,
                    deptDesc: dbData.departmentDesc,
                    profilePicture: dbData.profilePicture
                }
            },
            idd: dbData.idd
        }
        // console.log("DB DATA DEPT BY ID: ", returner)
        return returner

    }

    async addOrEditDepartment(payload) {
        let data = JSON.parse(payload.body.data)
        let uploadedImage;
        let uploadPath;
        let idd = payload.body.idd == 0 ? null : payload.body.idd
        let spType = payload.body.type == 'add' ? 3 : 4
        let filePathDb = data.profilePicture

        uploadPath = `../public/company_files/company_name/department/${data.deptName}/`;

        if (payload.files && Object.keys(payload.files).length > 0) {
            uploadedImage = payload.files.image;
            ems.saveImage(uploadedImage, uploadPath)
            filePathDb = 'company_name/department/' + data.deptName + '/' + uploadedImage.name
        }
        let sql = `call ems.sp_department(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
            ?,
            @companyId2); 
            SELECT @companyId2;`

        const result = await db.query(sql,
            [spType, data.deptName, data.deptId, data.deptLeader, 1, data.officeAddress, data.deptDesc, new Date(data.createdDate), new Date(data.lastEditedDate), 1, filePathDb,
                idd,
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

    async deleteDepartment(payload) {
        let data = payload.body.data

        let sql = `call ems.sp_department(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
            ?,
            @companyId2); 
            SELECT @companyId2;`

        const result = await db.query(sql,
            [5, null, data, null, 1, null, null, null, null, null, null,
                null,
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

    async getEmployeesByDepartment(payload) {
        let data = payload.query.data

        let sql = `call ems.sp_department(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?,
            @companyId2); 
            SELECT @companyId2;`
        const result = await db.query(sql,
            [6, null, data, null, null, null, null, null, null, null, null,
                null,
                null],
            function (err, result) {
                if (err) {
                    console.error("ERROR: ", err)
                } else {
                    console.log("RESULT: ", result)
                }
            }
        );

        let dbData = result[0][0]
        console.log("DB DATA: ", dbData)
        return dbData
    }
}

module.exports = Post