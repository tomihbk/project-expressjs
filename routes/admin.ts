import express from 'express'
import path from 'path'

import rootDir from '../util/path'

const router = express.Router()

const products = []

router.get('/add-product', (req, res, next) => {
    res.render('add-product.ejsV', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      })
})

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    console.log(req.body)
    res.redirect('/')
})

export default { router, products }