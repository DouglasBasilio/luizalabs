const { response } = require('express')
const CategoryModel = require('../models/category')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const category = await CategoryModel.find(obj)

    res.send(category)
}

async function post(req, res){
    const {
        name,
    } = req.body

    //console.log(req.body)

    const category = new CategoryModel({
        name,
    })

    category.save()

    res.send({
        message: 'success'
    })
}

async function put(req, res){
    const { id } = req.params

    // procurar o produto
    const category = await CategoryModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        category,
    })
}

async function remove(req, res){
    // pegar o id
    const { id } = req.params

    const remove = await CategoryModel.deleteMany({ _id: id })

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