Ext.define('MyApp.view.TreeNode', {
			extend : 'Ext.tree.Panel',
			xtype : 'dashboard-grid',
			requires : ['Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.state.*'],
			rootVisible : false,
			animate : true,
			useArrows : true,
			reference : 'dashboard-grid',
			controller : 'dashboardviewcontroller',
			columns : [{
						xtype : 'treecolumn',
						text : 'Name',
						dataIndex : 'text',
						flex : 1
					}, {
						text : 'Description',
						dataIndex : 'description',
						flex : 1
					}, {
						text : 'Status',
						dataIndex : 'status',
						align : 'center',
						flex : 1,
						renderer : function(value, metaData) {
							if (value === "false") {
								metaData.css = "icon-red";
							} else if (value === "true") {
								metaData.css = "icon-green";
							} else {
								metaData.css = "icon-gray";
							}
							return "";
						}
					}],
			initComponent : function() {
				var store = Ext.create('MyApp.store.Dashboard');
				store.load();
				Ext.apply(this, {
							store : store
						});

				this.callParent(arguments);
			}
		});