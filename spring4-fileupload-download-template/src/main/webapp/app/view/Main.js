Ext.define('MyApp.view.Main', {
	extend : 'Ext.form.Panel',
	xtype : 'app-main',
	title : 'File Upload download utility',
	modal : true,
	border : false,
	standardSubmit : false,
	headers : {
		'Content-type' : 'multipart/form-data'
	},
	maxHeight : '50',
	layout : {
		type : 'column'
	},
	items : [{
				xtype : 'fileuploadfield',
				columnWidth : 0.8,
				maxWidth : '450',
				padding : '1 150 50 5',
				name : 'file',
				msgTarget : 'side',
				// allowBlank : false,
				buttonText : 'Browse...'
			}, {
				xtype : 'button',
				maxWidth : '100',
				text : 'Start Importing',
				padding : '1 1 1 1',
				height : 25,
				columnWidth : 0.15,
				handler : function() {
					try {
						var form = this.up('form').getForm();
						var win = this.up('panel').up('panel');
						console.log(win);
						fileName = form.getFields().items[0].getValue();
						var extension = fileName.substr(fileName
								.lastIndexOf('.')
								+ 1);
						var urlhome = 'action/file/upload';
						var statusValue = '';

						if (form.getFields().items[0].getValue() != '') {
							statusValue = form.submit({
										url : urlhome,
										wait : 'Uploading your File...',
										success : function(form, action) {
											Ext.Msg.alert('Success',
													action.result.message);
										},
										failure : function(form, action) {
											Ext.Msg.alert('Error',
													action.result.message);
										}

									});

						} else {
							if ((form.getFields().items[0].getValue() == '')) {
								Ext.Msg.alert('No Selection',
										'No File is selected for Import');
							} else {
								Ext.Msg
										.alert('Improper Selection',
												'Only Zip format is allowed for Import');
							}
						}// end of else
					} catch (e) {
						console.log('Inside UploadBrowser.js on upload click');
						console.log(e);
					}

				}// end of handler
			}]

});