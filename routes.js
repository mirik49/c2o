const routes = module.exports = require('next-routes')();

routes
    .add('index',"/:contract","index")
    .add('/',"notfound")
    .add("/payment/success", "success")
    .add("/payment/declined", "declined")
    .add("/prolongation", "prolongation")
// .add("/", "service")
// .add('index',"/:contract","service")