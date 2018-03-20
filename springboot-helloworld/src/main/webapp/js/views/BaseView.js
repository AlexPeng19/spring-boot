//@@@ START COPYRIGHT @@@

//(C) Copyright 2015-2018 Esgyn Corporation

//@@@ END COPYRIGHT @@@

define([
        'text!index.html',
     ], function (LoginT) {
	'use strict';
	var _this = null;
	var LoginView = Backbone.View.extend({

		template:  _.template(LoginT),
		
		pageWrapper: null,
		
		el: $('#content-wrapper'),

		initialize: function(options) { 
			_.bindAll(this, 'beforeRender', 'render', 'afterRender'); 
			_this = this; 

			this.render = _.wrap(this.render, function(render, args) { 
				_this.beforeRender(); 
				render(args); 
				_this.afterRender(); 
				return _this; 
			}); 
		}, 

		beforeRender: function() { 
		}, 

		render: function (args) {
			if(this.pageWrapper == null){
				this.$el.html(this.template);
				this.init(args);
			}else
			{
				this.$el.empty().append(this.pageWrapper);
				this.resume(args);
			}
			return this;        	
		},

		afterRender: function() { 
		},
		init: function(){
		},

		resume: function(){
		},
		pause: function() {
		}
	});


	return LoginView;
});
