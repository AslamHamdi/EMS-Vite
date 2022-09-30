const db = require('../config/db')

class Post {
    contructor(){

    }

    async getAllRole(){
        let result = {
            text: "HELLO THERE"
        }
        return result
    }

    async addOrEditRole(payload){
        let data = payload
        let sql = "call ems.sp_role(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, @companyId2); SELECT @companyId2;"
        const result = await db.query(sql, 
            [2, data.roleName, data.roleId, 1, 1, 1, data.officeAddress, data.roleDesc, data.createdDate, data.lastEditedDate, 1, null], 
            function(err, result){
                if(err){
                    console.error("ERROR: ", err)
                }else{
                    console.log("RESULT: ", result)
                }
            });
        return result
    }
}

module.exports = Post