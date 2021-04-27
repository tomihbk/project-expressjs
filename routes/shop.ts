import express from 'express'
import path from 'path'

import rootDir from '../util/path'

const router = express.Router()

router.get('/', (req, res, next) => {
    console.log("in the middleware")
    //__dirname is a global variable that gives the path of the project
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

export default router