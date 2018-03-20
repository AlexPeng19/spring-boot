//@@@ START COPYRIGHT @@@

//(C) Copyright 2015-2018 Esgyn Corporation

//@@@ END COPYRIGHT @@@

define([
        'jquery',
        'underscore',
        'backbone',
        'views/BaseView',
        ], function($, _, Backbone, BaseView) {
	'use strict';

	
	var loginView = null;
	
	var AppRouter = Backbone.Router.extend({
		execute: function(callback, args, name) {
			window.location.hash = "/index";
			if(loginView == null)
				loginView = new LoginView();

			loginView.render();
		},
		routes: {
			'index': 'showLogin'
		},
		initialize : function (){
			window.router = this;
			var login = new LoginView();
			login.render();
		},
		showLogin : function(){

			// Call render on the module we loaded in via the dependency array
			if(loginView == null){
				loginView = new LoginView();
			}
			switchView(loginView);

		}
	});
	
	var switchView = function(view, args) {

		if (currentView && (currentView != view || currentView == schemasView)) {
			// Detach the old view
			currentView.remove();
		}
		// Render view after it is in the DOM (styles are applied)
		view.render(args);
		currentView = view;
	};
	return AppRouter;
});
