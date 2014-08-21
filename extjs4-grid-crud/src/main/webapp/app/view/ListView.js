Ext.define('MyApp.view.ListView', {
			extend : 'Ext.grid.Panel',
			xtype : 'app-grid',
//			title : 'Grid - Template',
			layout : {
				type : 'fit'
			},
			emptyText : 'No Records',
			initComponent : function() {
				console.log('MyApp.view.ListView - Initcomponent');
				var me = this;
				store = Ext.create('MyApp.store.Article');
				store.load();
				Ext.apply(me, {
							store : store
						});

				store.on('datachanged', function() {
							this.down('#articleCount').update({
										count : store.getCount()
									});
						}, this);

				this.callParent(arguments);
			},
			columns : [{
						text : 'Name',
						dataIndex : 'id',
						flex : 1,
						hidden : true
					}, {
						text : 'Name',
						dataIndex : 'name',
						flex : 1
					}, {
						text : 'Description',
						dataIndex : 'description',
						flex : 1
					}, {
						xtype : 'actioncolumn',
						width : 50,
						items : [{
							tooltip : 'Delete Article',
							itemId : 'deleteBtn',
							iconCls : 'icon-delete',
							handler : function(view, rowIndex, colIndex) {
								view.up('grid').fireEvent('deleteArticle',
										view.up('grid'), rowIndex, colIndex);
							}
						}]
					}],
			tbar : [{
						xtype : 'textfield',
						iconCls : 'icon-search',
						emptyText : 'Search...',
						name : 'searchPattern',
						listeners : {
							change : function(field, newValue, oldValue, eOpts) {
								var articleStore = field.up('grid').getStore();
								articleStore.clearFilter(true);
								articleStore.filter({
											property : "name",
											value : newValue,
											anyMatch : true,
											caseSensitive : false
										})
								if (Ext.isEmpty(newValue)) {
									articleStore.clearFilter(true);
								}
							}

						}
					}, {
						xtype : 'button',
						iconCls : 'icon-create',
						text : 'Create Article',
						action : 'createArticle'
					}, {
						xtype : 'button',
						text : 'Refresh',
						iconCls : 'icon-refresh',
						action : 'refreshArticleGrid'
					}],
			bbar : [{
						xtype : 'component',
						itemId : 'articleCount',
						tpl : 'Total Articles: <b>{count}</b>',
						style : 'margin-right:5px'
					}]
		});