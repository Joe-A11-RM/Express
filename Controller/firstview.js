const firstviewfun = function(req, res, next) {
    res.render('first_view', {
        url1: `http://localhost:${port}/home`,
        url2: `http://localhost:${port}/services`,
        url3: `http://localhost:${port}/contact`,
    })
    next()
}

module.exports = firstviewfun