const db = require('../config/db')

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
        let data = payload
        console.log("PAYLOAD: ", data)
        let sql = "call ems.sp_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @companyId2); SELECT @companyId2;"
        const result = await db.query(sql,
            [2, data.deptName, data.deptId, 1, 1, data.officeAddress, data.deptDesc, data.createdDate, data.lastEditedDate, 1, null],
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