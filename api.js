/**
 * Router for this app
 */
;(function() {
	
	var express = require('express')
	  , util = require('util')
	  , path = require('path')
	  , bodyParser = require('body-parser')
	  , debug = require('debug')('api')
//	  , common = require(path.resolve(process.env.PROJECT_DIR, './server/lib/common.js'))
//	  , nodeversion = require('./1.0/nodejsutils/nodeversion.js').run;
	  , common = require('bsjstest').lib.common
//	  , common = require(path.resolve(__dirname, '../server/lib/common.js'))
//	  , common = require('bsjstest/server/lib/common.js')
	  , xerverappdir = require('xerver-app/dirname.js')
	  , nodeversion = require('xerver-app/1.0/nodejsutils/nodeversion.js').run;

	var api = function(app, options) {
		
		var routes = express.Router();

		// static requests would get handled here
		routes.use('/1.0/nodejsutils', express['static'](path.resolve(xerverappdir(), './1.0/public'),
				{'redirect': true}));
		
		routes.use('/1.0/nodejsutils/nodeversion', nodeversion);

		// hang the subrouter on the app.
		// It seems this could improve route matching performance for the different sub-apis
		var wsAuth = common.auth( process.env.XERVER_ID, process.env.XERVER_TOKEN );
		app.use('/xerver-app', wsAuth, routes);
	};
	
	module.exports = api;

}).call(this);