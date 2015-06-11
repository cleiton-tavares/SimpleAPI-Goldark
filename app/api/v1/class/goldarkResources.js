exports.realtimeURI = 'https://angel-lima.realtime.goldarkapi.com'
exports.token       = 'quo4eOcYbNVuO41y5YUrdwpwU7QaDLP09VUth5ZnbD+eIWSuLgm7H7STrdxYKYH5nAQpTToASq4X+MHBwSAR8A==';

exports.endpoint  = function (meth, path) {
	return {
  		hostname: 'angel-lima.goldarkapi.com',
  		port: 80,
  		path: path,
  		method: meth,
		headers: {
          'Accept': 'application/json',
          'X-Api-Token': exports.token,
          'Content-Type': 'application/json'
      }
	};
};
