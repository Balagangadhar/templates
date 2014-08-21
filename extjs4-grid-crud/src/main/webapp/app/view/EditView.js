Ext.define('MyApp.view.EditView', {
			extend : 'Ext.form.Panel',
			xtype : 'create-article',
			bodyPadding : 5,
			layout : 'anchor',
			defaults : {
				anchor : '100%'
			},
			initComponent : function() {
				console.log('MyApp.view.EditView - initComponent');
				this.callParent(arguments);
			},
			defaultType : 'textfield',
			items : [{
						fieldLabel : 'Name',
						name : 'name',
						allowBlank : false
					}, {
						fieldLabel : 'Description',
						name : 'description'
					}],

			buttons : [{
						text : 'Reset',
						handler : function() {
							this.up('form').getForm().reset();
						}
					}, {
						text : 'Save',
						formBind : true,
						handler : function(button) {
							this.up('form').fireEvent('saveArticle', button);
						}
					}],
			showErrors : function(message) {
				this.form.getForm().markInvalid([{
							id : 'name',
							msg : message
						}]);
			}
		});