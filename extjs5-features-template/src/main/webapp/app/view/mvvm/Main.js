Ext.define('MyApp.view.mvvm.Main', {
			extend : 'Ext.panel.Panel',
			xtype : 'main-viewmodel',
			layout : 'anchor',
			bind : {
				title : '{panelTitle}'
			},
			title : 'test',
			viewModel : {
				type : 'main-viewmodel'
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
						xtype : 'breadcrumb-view'
					}]
		});