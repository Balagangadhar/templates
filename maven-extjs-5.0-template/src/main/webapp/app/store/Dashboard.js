Ext.define('MyApp.store.Dashboard', {
			extend : 'Ext.data.TreeStore',
			proxy : {
				type : 'rest',
				url : 'action',
				headers : {
					'Content-Type' : 'application/json',
					'Accept' : 'application/json'
				}
			},
			folderSort : true
		});
