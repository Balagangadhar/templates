Ext.define('MyApp.controller.Main', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyApp.store.ListView' ],
	models : [ 'MyApp.model.ListView' ],
	views : [],
	routes : {
		'home' : {
			action : 'onHome'
		},
		'mvc' : {
			action : 'onMvc'
		},
		'routing' : {
			action : 'onRouting'
		},
		'mvvm' : {
			action : 'onMvvm'
		},
		'viewcontroller' : {
			action : 'onViewController'
		}
	},
	init : function() {
		console.log('MyApp.controller.Main - Initialized');
		this.control({
			'listview' : {
				'cellclick' : this.handleListViewCellClick
			}
		});
	},
	onHome : function() {
		console.log('Home Page : Redirecting it to mvc demo');
		this.redirectTo('mvc');
	},
	onMvc : function() {
		console.log('onMvc');
		var viewport = Ext.ComponentQuery.query('viewport')[0];
		viewport.removeAll(true);
		viewport.add(Ext.widget('listview', {
			title : 'MVC Demo'
		}));
	},
	onRouting : function() {
		console.log('onRouting');
		var viewport = Ext.ComponentQuery.query('viewport')[0];
		viewport.removeAll(true);
		viewport.add(Ext.widget('listview', {
			title : 'Routing Demo'
		}));
	},
	onMvvm : function() {
		console.log('onMvvm');
		var viewport = Ext.ComponentQuery.query('viewport')[0];
		viewport.removeAll(true);
		var listViewRecord = Ext.create('MyApp.model.ListView');
		listViewRecord.set('name', 'sampleName');
		var viewModelMainPanel = Ext.widget('viewmodelmain', {
			listViewRecord : listViewRecord
		});
		viewport.add(viewModelMainPanel);
	},
	onViewController : function() {
		console.log('onViewController');
		var viewport = Ext.ComponentQuery.query('viewport')[0];
		viewport.removeAll(true);
		viewport.add(Ext.widget('viewcontrollerparentpanel'));

	},
	handleListViewCellClick : function(view, td, cellIndex, record, tr,
			rowIndex, e, eOpts) {
		console.log('handlListViewCellClick in Controller');
	}
});
