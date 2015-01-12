Ext.define('MyApp.view.session.UserWindow', {
			extend : 'Ext.window.Window',
			xtype : 'user-window',
			modal : true,
			width : '50%',
			layout : 'fit',
			closable : true,
			title : 'Create User',
			controller : 'session-userviewcontroller',
			items : [{
						xtype : 'form',
						layout : 'anchor',
						bodyPadding : 5,
						items : [{
									fieldLabel : 'Name',
									bind : '{theUser.name}',
									allowBlank : false,
									xtype : 'textfield',
									anchor : '100%'
								}, {
									fieldLabel : 'Address',
									bind : '{theUser.address}',
									xtype : 'textfield',
									anchor : '100%'
								}],
						buttons : [{
									text : 'save',
									handler : 'saveUser',
									formBind : true,
									disabled : true
								}]
					}]
		})