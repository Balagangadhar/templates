Ext.define('MyApp.model.User', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'string'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'address',
		type : 'string'
	} ],
	proxy : {
		type : 'rest',
		url : 'action/user/',
		reader : {
			type : 'json'
		}
	}
});