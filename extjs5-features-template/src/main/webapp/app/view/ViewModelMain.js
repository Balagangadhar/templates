Ext.define('MyApp.view.ViewModelMain', {
			extend : 'Ext.panel.Panel',
			xtype : 'viewmodelmain',
			layout : 'anchor',
			controller : 'viewmodelcontroller',
			bind : {
				title : '{panelTitle}'
			},
			title : 'test',
			viewModel : {
				type : 'panelviewmodel'
			},
			items : [{
						xtype : 'textfield',
						emptyText : 'Type something here',
						anchor : '100%',
						bind : '{panelTitle}'
					}, {
						xtype : 'textfield',
						emptyText : 'Type something here',
						anchor : '100%',
						bind : '{panelTitle}'
					}],
			initComponent : function() {
				this.callParent(arguments);
			},
			tbar : [{
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
					}]
		});