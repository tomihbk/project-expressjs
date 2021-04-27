import express from 'express'
import path from 'path'
import adminData from './admin'

import rootDir from '../util/path'

const router = express.Router()

router.get('/', (req, res, next) => {
    const products = adminData.products;
  res.render('shop.ejs', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  })
})

export default router