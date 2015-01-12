Ext.define('MyApp.store.User', {
	extend : 'Ext.data.Store',
	model : 'MyApp.model.User',
	proxy : {
		type : 'ajax',
		url : 'users.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	}
});
