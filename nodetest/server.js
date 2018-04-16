/* a simple Express server for Node.js*/
var express = require("express"),
http = require("http"),
appTest;
// create our server - listen on port 3030
appTest = express();
http.createServer(appTest).listen(3000);
// set up routesç
appTest.use(express.static('../'));
appTest.get("/register", function (req, res) {
    res.sendfile(__dirname + "/SignUp.html")
    });
//set up static file directory - default route for server

