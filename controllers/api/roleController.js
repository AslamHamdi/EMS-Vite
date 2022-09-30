const Post = require('../../models/role')

exports.getAllRole = async(req, res, next) => {
    try {
        let data = new Post()
        data = await data.getAllRole()
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}

exports.addOrEditRole = async(req, res, next) => {
    try {
        let data = new Post()
        let payload = req.body.data
        data = await data.addOrEditRole(payload)
        res.status(200).json({data})
    } catch (error) {
        console.log(error)
    }
}