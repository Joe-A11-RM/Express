var express = require('express')
const router = express.Router()


const firstview_function = require('../Controller/firstview')
const home_function = require('../Controller/home')
const services_function = require('../Controller/services')
const contact_function = require('../Controller/contact')


router.get('/', firstview_function)
router.get('/home', home_function)
router.get('/services', services_function)
router.get('/contact', contact_function)

module.exports = router