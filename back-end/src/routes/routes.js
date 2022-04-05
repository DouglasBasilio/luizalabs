// import Router
const router = require('express').Router()

const UserController = require('../controllers/user')
const ProductController = require('../controllers/product')
const CategoryController = require('../controllers/category')

router.get('/user/:id?', UserController.get)
router.post('/user', UserController.post)
router.put('/user/:id', UserController.put)
router.delete('/user/:id', UserController.remove)

router.get('/product/:id?', ProductController.get)
router.post('/product', ProductController.post)
router.put('/product/:id', ProductController.put)
router.delete('/product/:id', ProductController.remove)

router.get('/category/:id?', CategoryController.get)
router.post('/category', CategoryController.post)
router.put('/category/:id', CategoryController.put)
router.delete('/category/:id', CategoryController.remove)

module.exports = router