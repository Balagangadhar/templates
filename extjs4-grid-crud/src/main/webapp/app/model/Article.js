Ext.define('MyApp.model.Article', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id'
	}, {
		name : 'name'
	}, {
		name : 'description'
	} ],
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
	}
});
