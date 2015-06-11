var $http = require('http');
var $goldarkResources = require('./../class/goldarkResources')


exports.people = new function (data) {
	this.get = function () {
		return 13
	}
};


exports.authenticatable = new function (data) {

	this.get = function (data) {
		var url  = $goldarkResources.endpoint('POST', '/sessions');
		console.log(data);

		var a = $http.request(url, function(res) {
			httpRes = res;
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


		return httpRes

	};

	this.set = function (data) {

	};


};
