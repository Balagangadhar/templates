/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by Sencha
 * Cmd when upgrading.
 */

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
// @require @packageOverrides
Ext.Loader.addClassPathMappings({
			"MyApp" : "app",
			"MyApp.Application" : "app/Application.js"
		});

Ext.Loader.setConfig({
			disableCaching : false
		});
Ext.application({
	name : 'MyApp',

	extend : 'MyApp.Application',
	defaultToken : 'home',
	listen : {
		controller : {
			'#' : {
				unmatchedroute : 'onUnmatchedRoute'
			}
		}
	},
	onUnmatchedRoute : function(hash) {
		console.log('Unmatched', hash);
		this.redirectTo('#home');
	},
	autoCreateViewport : true
});
