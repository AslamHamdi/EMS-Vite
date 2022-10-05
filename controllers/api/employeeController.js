const Post = require('../../class/employee')

exports.getAllEmployee = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getAllEmployee()
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.addOrEditEmployee = async (req, res, next) => {
    try {
        let data = new Post()
        let payload = req.body.data
        let fileUpload = req.file
        console.log("FILE UPLOAD: ", fileUpload)
        data = await data.addOrEditEmployee(payload)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}