const get404 = (req, res, next) => {
    res.status(404).render('404.ejs',{pageTitle: 'Page not found!'})
}

export default get404