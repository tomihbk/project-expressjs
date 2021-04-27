import express from 'express'
import path from 'path'

import rootDir from '../util/path'

const router = express.Router()

router.get('/admin/add-product', (req, res, next) => {
    console.log("in the middleware")
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

export default router