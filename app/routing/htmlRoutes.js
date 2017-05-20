//should include two routes
//GET route to /survey to display survey page
//default USE route that leads to home.html which displays home page

var path = require('path');

module.exports = function (app) {

    app.get('/survey' , function(req,res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use( function(req,res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}