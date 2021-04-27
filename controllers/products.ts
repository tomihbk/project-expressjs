import Product from '../models/product'

const getAddProduct = (req, res, next) => {
    res.render('add-product.ejs', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

const getProduct = (req, res, next) => {
 const products = Product.fetchAll()
    res.render('shop.ejs', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
}
export default { getAddProduct, postAddProduct, getProduct }