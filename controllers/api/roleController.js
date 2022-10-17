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

exports.getRoleById = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getRoleById(req)
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

exports.deleteRole = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.deleteRole(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.getEmployeesByRole = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getEmployeesByRole(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}