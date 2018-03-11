var express = require('express');
var path = require('path');
var watson = require('watson-developer-cloud');
var auth = require('./auth.js');


var app =express();


// Watson api authentication

// Deprecated style.
// var conversation = watson.conversation(auth.conversation);

var conversation = watson.conversation({
	username: "user_name",
	password: "password",
	version: 'v1',
	version_date: '2018-02-16'
});



app.use('/watson', express.static(path.join(__dirname + '/public')));


// Our first route
app.get('/api', function(req, res) {

	conversation.message({
		workspace_id: "workspace_id",
		input: {"text": "Hi"}
	}, function(err, response) {
		if(err)
			console.log(err)
		else
			res.send(JSON.stringify(response, null, 2));	
	});
	
});



// Listen on port 3000
app.listen(3000, function(){
	console.log("Watson Bot running on localhost:3000")
	
})