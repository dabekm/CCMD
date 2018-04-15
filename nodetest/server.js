/* a simple Express server for Node.js*/
var express = require("express"),
http = require("http"),
appTest;
// create our server - listen on port 3030
appTest = express();
http.createServer(appTest).listen(3030);
// set up routes
appTest.get("/", function(req, res) {
    res.send("Welcome to the Job Search Helper server. Append /index.html to the browser URL to view the home page.")
    });
//set up static file directory - default route for server
appTest.use(express.static('../'));
