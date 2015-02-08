Ext.define('MyApp.view.Main', {
			extend : 'Ext.tree.Panel',
			xtype : 'app-main',
			title : 'Infrastructure',
			rootVisible : false,
			store : 'MyApp.store.Infrastructure'
		});
