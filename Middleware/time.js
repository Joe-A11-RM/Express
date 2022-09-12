var date = new Date()
var hour = date.getHours()
var day = date.getDay()
    //console.log(hour)
    //console.log(day)

const middleware = function(req, res, next) {
    console.log("Request time is:" + Date.now())
    if ((day == 0 || day == 6) && (hour < 9 || hour > 17)) {
        res.render('status_view')
    } else {
        next()
    }
}


module.exports = middleware