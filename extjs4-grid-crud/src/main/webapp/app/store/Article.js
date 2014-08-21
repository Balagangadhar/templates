Ext.define('MyApp.store.Article', {
	extend : 'Ext.data.Store',
	model : 'MyApp.model.Article',
	proxy : {
		type : 'rest',
		url : 'action/article/',
		headers : {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json'
		},
		listeners : {
			exception : function(proxy, response, operation) {
				console.log(response);
			}

		}
	},
});