const Post = require('../../class/department')

exports.getAllDepartment = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getAllDepartment(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.getDepartmentById = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getDepartmentById(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.addOrEditDepartment = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.addOrEditDepartment(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.deleteDepartment = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.deleteDepartment(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.getEmployeesByDepartment = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getEmployeesByDepartment(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}