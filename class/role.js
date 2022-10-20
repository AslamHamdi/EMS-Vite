const db = require('../config/db')
const ems = require('../lib/ems')

class Post {
    contructor() {

    }

    async getAllRole() {
        let sql = `call ems.sp_role(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, 
            @companyId2); 
            SELECT @companyId2;`

        const result = await db.query(sql,
            [1, null, null, null, 1, 1, null, null, null, null, null, null,
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
        // console.log("DB DATA ROLE: ", returner)
        return returner
    }

    async getRoleById(payload) {
        let data = payload.query.data
        let sql = `call ems.sp_role(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
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
            roleForm: {
                model: {
                    roleName: dbData.roleName,
                    roleId: dbData.roleId,
                    inDepartment: dbData.departmentId,
                    roleLeader: dbData.roleLeadId,
                    officeAddress: dbData.officeAddress,
                    roleDesc: dbData.roleDesc,
                    createdDate: dbData.createdDate,
                    lastEditedDate: dbData.lastEditedDate,
                    profilePicture: dbData.profilePicture
                },
            },
            idd: dbData.idd,
        }
        return returner
    }

    async addOrEditRole(payload) {
        console.log(payload.body.data)
        let data = JSON.parse(payload.body.data)
        let uploadedImage;
        let uploadPath;
        let idd = payload.body.idd == 0 ? null : payload.body.idd
        let spType = payload.body.type == 'add' ? 3 : 4
        let filePathDb = data.profilePicture

        uploadPath = `../public/company_files/company_name/role/${data.roleName}/`;

        if (payload.files && Object.keys(payload.files).length > 0) {
            uploadedImage = payload.files.image;
            ems.saveImage(uploadedImage, uploadPath)
            filePathDb = 'company_name/role/' + data.roleName + '/' + uploadedImage.name
        }

        let sql = `call ems.sp_role(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
            ?,
            @companyId2); 
            SELECT @companyId2;`

        const result = await db.query(sql,
            [spType, data.roleName, data.roleId, data.inDepartment, data.roleLeader, 1, data.officeAddress, data.roleDesc, new Date(data.createdDate), new Date(data.lastEditedDate), 1, filePathDb,
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

    async deleteRole(payload) {
        let data = payload.body.data

        let sql = `call ems.sp_role(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
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

    async getEmployeesByRole(payload) {
        let data = payload.query.data

        let sql = `call ems.sp_role(
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
            ?,
            @companyId2); 
            SELECT @companyId2;`

        const result = await db.query(sql,
            [6, null, data, null, 1, null, null, null, null, null, null,
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
        //console.log("DB DATA: ", dbData)
        return dbData
    }
}

module.exports = Post