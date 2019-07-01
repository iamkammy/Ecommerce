var productRoute = require('./products.json');
var adminRoute = require('./admin.json');


module.exports =function() {
    return {
        productRoute:productRoute,
        adminRoute : adminRoute
    }
}