var express = require('express')



const homefun = function(req, res, next) {
    res.render('home_view', {
        url1: `http://localhost:${port}/home`,
        url2: `http://localhost:${port}/services`,
        url3: `http://localhost:${port}/contact`,
    })
    next()
}

module.exports = homefun