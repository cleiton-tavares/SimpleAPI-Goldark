var $goldarkResources = require('./../class/goldarkResources')


exports.people = new function (data) {
	this.get = function () {
		return 13
	}
};


exports.authenticatable = new function (data) {

	this.get = function (data) {
		var url  = $goldarkResources.endpoint('POST', '/sessions')	
	
		var a = $https.request(url, function(res) {
			  console.log("statusCode: ", res.statusCode);
			  console.log("headers: ", res.headers);

			  res.on(data, function(d) {
			    // process.stdout.write(d);
			  });
		});
		a.end();

		a.on('error', function(e) {
		  console.error(e);
		});

	};
	
	this.set = function (data) {
		
	};
	

};