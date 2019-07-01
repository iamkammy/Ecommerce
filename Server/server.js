var jsonServer = require('json-server');
var server = jsonServer.create()
var router = jsonServer.router(require('./db.js')())
var middlewares = jsonServer.defaults()
const port = 777;
server.use(middlewares)
server.use(router)
server.listen(port, function(){
    console.log('Json Server is running at port ->',port);
})