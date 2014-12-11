Ext.define('MyApp.Application', {
	extend : 'Ext.app.Application',
	views : [ 'MyApp.view.ListView', 'MyApp.view.Accordion',
			'MyApp.view.ParentPanel', 'MyApp.view.AccordionViewController',
			'MyApp.view.ViewModelMain', 'MyApp.view.panelViewModel',
			'MyApp.view.ViewModelController', 'MyApp.view.ListViewController'
	// TODO: add views here
	],

	controllers : [ 'MyApp.controller.Main'

	// TODO: add controllers here
	],

	stores : [
	// TODO: add stores here
	]
});
