var $https = require('https');
var $express = require('express');
var $bodyParser = require('body-parser');
var $goldarkResources = require('./class/goldarkResources')
var $users = require('./model/users')

// INSTANCIAS
var $app = $express();
var $jsonParser = $bodyParser.json()

// ROUTES

//GET /
$app.use('/', $express.static(__dirname + '/public'));

// POST /USERS
$app.post('/users', $jsonParser,function(req, res) {
	var auth.status = $users.authenticatable.get(req.body)
	if(auth.status == 'connected'){
		res.send(auth.code)		
	}else{
		res.status(406).send('Not Acceptable');
	}
});



var server = $app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('API rodando em http://%s:%s', host, port);

});