const { response } = require('express')
const UsersModel = require('../models/user')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const users = await UsersModel.find(obj)

    res.send(users)
}

async function post(req, res){
    const {
        login,
        password,
    } = req.body

    //console.log(req.body)

    const user = new UsersModel({
        login,
        password,
    })

    user.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const { id } = req.params

    // procurar o produto
    const user = await UsersModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        user,
    })
}

async function remove(req, res){
    // pegar o id
    const { id } = req.params

    const remove = await UsersModel.deleteMany({ _id: id })

    const message  = remove.ok ? 'success' : 'error'
   
    console.log(message)

    res.send({
        message,
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}