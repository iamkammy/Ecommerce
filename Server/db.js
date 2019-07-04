var tshirt = require('./tshirt.json');
var admin = require('./admin.json');
var mobiles = require('./mobiles.json');

module.exports =function() {
    return {
        tshirt:tshirt,
        admin : admin,
        mobiles:mobiles
    }
}