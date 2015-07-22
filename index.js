/**
 * Module to configure the application
 */
;(function() {
	process.env.PROJECT_DIR = __dirname;

	var fs = require('fs')
	  , path = require('path')
	  , api = require('./api.js')
	  , start = require('xerver').start;
	
	// API
	var port = process.env.PORT || '3000';
	var host = process.env.HOST || 'localhost';
	var protocol = process.env.PROTOCOL || 'http';
	
	var key = fs.readFileSync(path.resolve(process.env.PROJECT_DIR, './cert/key.pem'), 'utf8');
	var cert = fs.readFileSync(path.resolve(process.env.PROJECT_DIR, './cert/certificate.pem'), 'utf8');
	
	var optionsApp = {
		server: {
			port: port,
			host: host,
			protocol: protocol,
			tls: {
				key: key,
				cert: cert
			}
		},
		api: {
			load: api
		}
	};

	var app;
	app = start(optionsApp,  function(err) {
		if(!err)
	    	console.log('Express wsnodejs app started on port ' + port);
	    else
	    	console.log(err, null);
	});

}).call(this);

