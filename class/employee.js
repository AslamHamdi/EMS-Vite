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
        console.log("PAYLOAD DATA: ", JSON.parse(data))
        // let sql = `call ems.sp_employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
        //                                 ?, ?, ?, ?, ?,
        //                                 ?, ?, ?,
        //                                 @employeeId2); 
        //                                 SELECT @employeeId2;`
        // const result = await db.query(sql,
        //     [2, data.companyForm.employeeId, 1, data.userForm.fName, data.userForm.lName, new Date(data.userForm.dateOfBirth), data.userForm.gender, data.userForm.icNum, data.userForm.address, data.userForm.country, data.userForm.state, data.userForm.city, data.userForm.zip, data.userForm.maritalStatus, data.userForm.phoneNum, data.userForm.profilePicture,
        //         data.companyForm.emailAddress, new Date(data.companyForm.dateReg), 1, 1, data.companyForm.password,
        //         data.emergencyForm.name, data.companyForm.relationship, data.companyForm.phoneNum,
        //         null],
        //     function (err, result) {
        //         if (err) {
        //             console.error("ERROR: ", err)
        //         } else {
        //             console.log("RESULT: ", result)
        //         }
        //     }
        // );
        let result = ""
        return result
    }
}

module.exports = Post