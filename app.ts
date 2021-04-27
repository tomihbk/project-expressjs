import express from 'express'
import adminRoutes from './routes/admin'
import shopRoutes from './routes/shop'
import path from 'path'
import errorController from './controllers/404'

const app = express()
app.set('view engine','ejs')
app.set('views','views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//grants static read access to public
app.use(express.static(path.join(__dirname, 'public')))

// /admin/XXXXX
app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(errorController)

app.listen(3001)