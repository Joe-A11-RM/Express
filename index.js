var express = require('express')
var app = express()
port = 4000

//Template Engine
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static('public'))

//Middleware to detect request time
const status = require("./Middleware/time")
app.use(status)

const post = require('./Router/route')
app.use('/', post)

app.listen(port)