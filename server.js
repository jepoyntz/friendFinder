var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
 
//app.get('/', function (req, res) {
 // res.send('Hello World')
//})

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('../public'));
 
// parse application/json 
app.use(bodyParser.json())
 

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
 
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});