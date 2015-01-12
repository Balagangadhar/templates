Ext.define('MyApp.store.List', {
	extend : 'Ext.data.Store',
	model : 'MyApp.model.List',
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
