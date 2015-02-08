Ext.define('MyApp.store.Infrastructure', {
			extend : 'Ext.data.TreeStore',
			model : 'Ext.data.TreeModel',
			proxy : {
				type : 'ajax',
				url : 'tree',
				headers : {
					'Content-Type' : 'application/json',
					'Accept' : 'application/json'
				}
			}
		});