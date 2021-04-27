import express from 'express'
import productsController from '../controllers/products'

const router = express.Router()

router.get('/', productsController.getProduct)

export default router