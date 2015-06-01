// GLOBAL IMPORTS
var https = require('https');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// CLASS
// var auth = require('/class/auth.js')

// MODEL
var apiURI  = function (meth, path) {
	return {
  		hostname: 'angel-lima.goldarkapi.com',
  		port: 443,
  		path: path,
  		method: meth
	};
};
var realtimeURI = 'https://angel-lima.realtime.goldarkapi.com' 
var token       = 'quo4eOcYbNVuO41y5YUrdwpwU7QaDLP09VUth5ZnbD+eIWSuLgm7H7STrdxYKYH5nAQpTToASq4X+MHBwSAR8A==';
// var users    = require('/model/users.js')
// var clinics  = require('/model/clinics.js')




// ROUTES

//GET /
app.use('/', express.static(__dirname + '/public'));

// POST /USERS
app.post('/users',function(req, res) {
	var data = req.body;
	var url  = apiURI('POST', '/users')

	var a = https.request(options, function(res) {
		  console.log("statusCode: ", res.statusCode);
		  console.log("headers: ", res.headers);

		  res.on('data', function(d) {
		    process.stdout.write(d);
		  });
	});
	a.end();

	a.on('error', function(e) {
	  console.error(e);
	});

});




var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('API rodando em  ]http://%s:%s', host, port);

});







v
