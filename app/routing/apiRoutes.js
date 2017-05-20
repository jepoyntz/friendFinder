//two routes
//GET with /api/friends which will display a JSON of all possible friends
//POST /api/friends which will handle incoming survey results
//this POST will also handle the compatibility logic

//compatibility 1-convert to [1,2,3,4,5,5,4,3,2,1] and get diff from your total
//2-use abs value of diff (no negs)
//closest match is user with least diff
//display result and pic of closest match

var friendsData = require ('../data/friends.js');

module.exports = function (app){

    app.get('/api/friends', function(req,res) {
        res.json(friendsData);
    });

   app.post('/api/friends', function(req,res){
    //console.log(req.body)
    var userScores = req.body['scores[]']
    var diffArray = [];
    var diffTotal = 0;

    for (var j=0;j<friendsData.length; j++){
        var friendScores = friendsData[j].scores




        for (var i=0;i<userScores.length; i++){
            var userValue = userScores[i];
            var friendValue = friendScores[i];
            var diffValue = Math.abs(userValue - friendValue)
            diffTotal += diffValue
        }
        diffArray.push(diffTotal)
        diffTotal = 0;
    console.log(diffTotal)
}
    var smallestIndex = 0;
    for (var i=0;i<diffArray.length - 1; i++){
        if (diffArray[i]>diffArray[i + 1]) {
            smallestIndex = i+1;
        }
        }
    console.log(diffArray);
    res.json(friendsData[smallestIndex]);
   })
}