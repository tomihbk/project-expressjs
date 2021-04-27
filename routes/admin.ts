import express from 'express'

import productController from '../controllers/products'

const router = express.Router()

router.get('/add-product', productController.getAddProduct)

router.post('/add-product', productController.postAddProduct)

export default router