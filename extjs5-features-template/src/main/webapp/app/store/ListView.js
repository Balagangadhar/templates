Ext.define('MyApp.store.ListView', {
	extend : 'Ext.data.Store',
	model : 'MyApp.model.ListView',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		url : 'data.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	}
});
