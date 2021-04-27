import express from 'express'
import adminRoutes from './routes/admin'
import shopRoutes from './routes/shop'
import path from 'path'

const app = express()
app.set('view engine','pug')
app.set('views','views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//grants static read access to public
app.use(express.static(path.join(__dirname, 'public')))

// /admin/XXXXX
app.use('/admin',adminRoutes.router)
app.use(shopRoutes)

app.use((req, res, next)=>{
res.status(404).sendFile(path.join(__dirname,'views','404.ejs'))
})

app.listen(3001)