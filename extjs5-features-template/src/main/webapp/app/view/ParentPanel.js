Ext.define('MyApp.view.ParentPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'viewcontrollerparentpanel',
	reference : 'parentpanel',
	controller : 'accordionviewcontroller',
	title : 'View Controller Demo',
	layout : 'vbox',
	tbar : [ {
		text : 'MVC',
		handler : 'openMVC'
	}, {
		text : 'Routing',
		handler : 'openRouting'
	}, {
		text : 'MVVM',
		handler : 'openMVVM'
	}, {
		text : 'View Controller',
		handler : 'openViewController'
	} ],
	items : [ {
		xtype : 'accordionview',
		width : '100%'
	}, {
		xtype : 'button',
		text : 'Get Acive Panel',
		handler : 'getActivePanel'
	} ]

});