var tshirtRoute = require('./tshirt.json');
var adminRoute = require('./admin.json');


module.exports =function() {
    return {
        tshirtRoute:tshirtRoute,
        adminRoute : adminRoute
    }
}