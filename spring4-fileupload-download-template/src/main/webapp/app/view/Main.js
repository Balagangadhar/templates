Ext.define('MyApp.view.Main', {
	extend : 'Ext.form.Panel',
	xtype : 'app-main',
	title : 'File Upload download utility',
	height : '500px',
	autoScroll : true,
	border : false,
	standardSubmit : false,
	headers : {
		'Content-type' : 'multipart/form-data'
	},
	// maxHeight : '50',
	layout : {
		type : 'anchor'
	},
	items : [{
				xtype : 'fileuploadfield',
				name : 'file',
				anchor : '50%',
				msgTarget : 'side',
				buttonText : 'Browse...'
			}, {
				xtype : 'button',
				text : 'Upload',
				anchor : '10%',
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
			}, {
				xtype : 'button',
				text : 'Download',
				anchor : '10%',
				handler : function() {
					console.log('Download Button click');
					var form = Ext.create('Ext.form.Panel', {
								standardSubmit : true
							});
					var urlhome = 'action/file/download';
					form.submit({
								target : '_blank',
								params : {
									p1 : 'parameter1',
									p2 : 'parameter2'
								},
								url : urlhome,
								method : 'POST',
								headers : {
									'Content-Type' : 'application/json'
								}
							});
					Ext.defer(function() {
								form.close();
							}, 100);
				}
			}]

});