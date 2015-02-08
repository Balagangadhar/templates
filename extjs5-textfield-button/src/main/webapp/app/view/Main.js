Ext.define('MyApp.view.Main', {
	extend : 'Ext.form.Panel',
	itemId : 'mainPanel',
	xtype : 'app-main',
	itemId : 'appmain',
	trackResetOnLoad : true,
	autoScroll : true,
	requires : ['MyApp.lib.TextfieldButton'],
	initComponent : function() {
		me = this;

		me.textfieldbutton = Ext.widget('textfieldbutton', {
			dataIndex : 'content',
			// widgetRecord : 'model'
			popupWindow : {
				xtype : 'window',
				width : '50%',
				height : '50%',
				title : 'Box',
				items : [{
							xtype : 'textfield',
							itemId : 'mytextbox',
							padding : '10 10 10 10',
							listeners : {
								afterrender : function(textfield) {
									var win = this.up();
									if (win.widgetRecord) {
										textfield
												.setValue(win.widgetRecord.text);
									}
								}
							}

						}],
				bbar : ['->', {
					text : 'Apply',
					handler : function(button) {
						var win = this.up().up();
						if (win.widgetRecord) {
							win.widgetRecord.text = win.down('#mytextbox')
									.getValue();
						}
						win.close();
					}
				}]
			}
		});

		Ext.apply(this, {
					items : [me.textfieldbutton],
					tbar : me.createTBarButtons()
				})

		this.callParent(arguments);
	},
	getSampleModel : function() {
		var projectName = Ext.id();
		Ext.define(projectName, {
					extend : 'Ext.data.Model',
					fields : [{
								name : 'text'
							}, {
								name : 'id'
							}, {
								name : 'content'
							}]
				});
		var model = Ext.create(projectName);
		model.set('text', 'sample');
		model.set('id', 'idsample');
		model.set('content', {
					text : Ext.id(),
					id : 'contentid'
				})
		return model;
	},
	createTBarButtons : function() {
		var me = this;
		return [{
					text : 'Load Record',
					handler : function() {
						me.model = me.getSampleModel();
						me.loadRecord(me.model);
					}
				}, {
					text : 'Update Record',
					handler : function() {
						me.updateRecord(me.getRecord());
					}
				}, {
					text : 'Get Record',
					handler : function() {
						console.log(me.getRecord());
					}
				}, {
					text : 'Is Form Dirty',
					handler : function() {
						console.log(me.isDirty());
					}
				}]
	}
});
