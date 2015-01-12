Ext.define('MyApp.view.session.UserViewController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.session-userviewcontroller',
	config : {
		control : {
			'session-user-list' : {
				itemdblclick : 'onDoubleClick'
			}
		}
	},
	onDoubleClick : function(view, record, item, index, e, eOpts) {
		console.log('onDoubleClick');
		this.openUserWindow(record, 'modify');
	},
	addNewUser : function() {
		var record = Ext.create('MyApp.model.User');
		console.log('ToBeImplemented');
		this.openUserWindow(record, 'create')
		// TODO Tobe implemented
		// this.openUserWindow(record, 'create');
	},
	openUserWindow : function(record, action) {
		console.log('openUserWindow');
		this.grid = this.getView();
		console.log(record, action);
		this.dialog = this.grid.add({
					xtype : 'user-window',
					title : action === 'modify' ? 'Update User' : 'Create User',
					autoShow : true,
					action : action,
					session : true,
					viewModel : Ext.create('Ext.app.ViewModel', {
								links : {
									theUser : record || {
										type : 'MyApp.model.User',
										create : true
									}
								}
							}),
					viewModelbkp : {
						links : {
							theUser : record
						}
					}
				});
		this.dialog.show();
	},
	saveUser : function() {
		var win = this.view;
		var grid = win.up('grid');
		var session = this.view.getSession();
		var theUser = this.getViewModel().get('theUser');
		theUser.setSession(session);
		session.adopt(theUser);
		if (win.action === 'create') {
//			var id = theUser.id;
//			var del = this.getStore('users').add(session.getRecord('User', id));
//			console.log(del);
		}

		session.getParent().update(session.getChanges());
		var sessionBatch = session.getSaveBatch();

		if (sessionBatch) {
			session.commit();
			sessionBatch.start();
			sessionBatch.on('operationcomplete', function(batch, operation,
							eOpts) {
						console.log('handle-operationcomplete');
						grid.getStore().commitChanges();
						win.close();
					});
			sessionBatch.on('exception', function(batch, operation, eOpts) {
						console.log('handle-exception')
					});
		} else {
			win.close();
		}
	}

});