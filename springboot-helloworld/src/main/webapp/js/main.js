//@@@ START COPYRIGHT @@@

//(C) Copyright 2015-2017 Esgyn Corporation

//@@@ END COPYRIGHT @@@

require.config({
	waitSeconds: 100,
	shim: {
		jqueryui: {
			deps: ['jquery'],
			exports: 'jqueryui'
		},
		bootstrap: {
			deps: ['jquery', 'jqueryui'],
			exports: 'bootstrap'
		},
		backbone: {
			// Depends on underscore and jQuery
			deps: ["underscore", "jquery"],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		"bootstrap-table":{
			deps:['jquery'],
			exprots:'bootstraptable'
		}
	},
	paths: {
		bootstrap:'../bower_components/bootstrap/dist/js/bootstrap.min',
		bootstrapNotify:'../bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min',
		jquery: '../bower_components/jquery/dist/jquery.min',
		jqueryvalidate: '../bower_components/jquery-validation/dist/jquery.validate.min',
		jqueryui: '../bower_components/jquery-ui/jquery-ui.min',
		underscore: '../bower_components/underscore/underscore-min',
		backbone: '../bower_components/backbone/backbone-min',
		templates: '../templates',
		jquerytimer: '../bower_components/timer.jquery/dist/timer.jquery.min',
		"bootstrap-table":'../bower_components/bootstrap-table/dist/bootstrap-table'
	}

});

require([
    'backbone', 'router'
], function (Backbone, Router) {
    window.router = new Router();
    Backbone.history.start();
});
