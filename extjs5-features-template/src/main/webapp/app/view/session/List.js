Ext.define('MyApp.view.session.List', {
			extend : 'Ext.grid.Panel',
			xtype : 'session-user-list',
			reference : 'sessionuserlist',
			controller : 'session-userviewcontroller',
			session : true,
			viewModel : {
				stores : {
					users : {
						model : 'MyApp.model.User',
						autoLoad : true,
						session : true
					}
				}
			},
			bind : '{users}',
			columns : [{
						text : 'Id',
						dataIndex : 'id',
						hidden : true
					}, {
						text : 'Name',
						dataIndex : 'name',
						flex : 1
					}, {
						text : 'Address',
						dataIndex : 'address',
						flex : 1
					}],
			initComponent : function() {
				console.log('MyApp.view.session.Listview : initComponent');
				this.callParent(arguments);
			},
			tbar : [{
						text : 'Add New',
						reference : 'addnewbutton',
						handler : 'addNewUser'
					}]
		});