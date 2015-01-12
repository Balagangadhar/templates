Ext.define('MyApp.view.breadcrumb.Breadcrumb', {
	extend : 'Ext.toolbar.Breadcrumb',
	xtype : 'breadcrumb-view',
	layout : {
		type : 'hbox',
		align : 'left'
	},
	initComponent : function() {
		this.callParent(arguments);
	},
	store : Ext.create('Ext.data.TreeStore', {
		root : {
			text : 'Go To',
			expanded : true,
			children : [ {
				text : 'ExtJS5',
				children : [ {
					text : 'MVC',
					reference : 'mvc',
					leaf : true
				}, {
					text : 'Routing',
					id : 'routing',
					expanded : true,
					leaf : true
				}, {
					text : 'MVVM',
					id : 'mvvm',
					leaf : true
				}, {
					text : 'View Controller',
					id : 'viewcontroller',
					leaf : true
				}, {
					text : 'Breadcrumb',
					id : 'breadcrumb',
					leaf : true
				}, {
					text : 'Session',
					id : 'session',
					leaf : true
				} ]
			} ]
		}
	})
});
