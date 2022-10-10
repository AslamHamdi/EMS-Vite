const Post = require('../../class/employee')

exports.getAllEmployee = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getAllEmployee(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.getEmployeeById = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.getEmployeeById(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}

exports.addOrEditEmployee = async (req, res, next) => {
    try {
        let data = new Post()
        data = await data.addOrEditEmployee(req)
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
    }
}