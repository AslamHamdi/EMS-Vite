const Post = require('../../models/department')

exports.getAllDepartment = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getAllDepartment()
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.addOrEditDepartment = async (req, res, next) => {
    try {
        let data = new Post()
        let payload = req.body.data
        data = await data.addOrEditDepartment(payload)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}