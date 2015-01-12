Ext.define('MyApp.Application', {
	extend : 'Ext.app.Application',
	views : ['MyApp.view.mvc.List', 'MyApp.view.mvvm.Main',
			'MyApp.view.mvvm.MainViewModel',
			'MyApp.view.viewcontroller.Accordion',
			'MyApp.view.viewcontroller.AccordionViewController',
			'MyApp.view.breadcrumb.Breadcrumb', 'MyApp.view.session.List',
			'MyApp.view.session.UserViewController', 'MyApp.view.session.UserWindow'],

	controllers : ['MyApp.controller.Main'],
	models : ['MyApp.model.List', 'MyApp.model.User'],

	stores : ['MyApp.store.List', 'MyApp.store.User']
});
