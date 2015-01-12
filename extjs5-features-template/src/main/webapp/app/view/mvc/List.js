Ext.define('MyApp.view.mvc.List', {
	extend : 'Ext.grid.Panel',
	xtype : 'list-view',
	store : 'MyApp.store.List',
	columns : [ {
		xtype : 'numbercolumn',
		text : 'S.No.',
		dataIndex : 'sno',
		format : '0',
		flex : 1
	}, {
		text : 'Feature',
		dataIndex : 'name',
		flex : 1,
	}, {
		text : 'Description',
		dataIndex : 'description',
		flex : 1
	}, {
		text : 'Launch',
		dataIndex : 'url',
		flex : 1,
		renderer : function(value, metaData, record) {
			return '<a href="#' + record.data.tokenId + '">' + value + '</a';
		}
	} ],
	initComponent : function() {
		console.log('MyApp.view.Listview : initComponent');
		this.callParent(arguments);
	},
	tbar : [ {
		xtype : 'breadcrumb-view'
	} ]
});