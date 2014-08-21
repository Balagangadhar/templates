Ext.define('MyApp.view.Main', {
	extend : 'Ext.container.Container',
	requires : [],
	xtype : 'app-main',

	layout : {
		type : 'fit'
	},

	items : [ {
		xtype : 'app-grid'
	} ]
});