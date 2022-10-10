const Post = require('../../class/role')

exports.getAllRole = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getAllRole(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.addOrEditRole = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.addOrEditRole(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}