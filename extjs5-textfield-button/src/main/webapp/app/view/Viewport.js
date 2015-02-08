Ext.define('MyApp.view.Viewport', {
			extend : 'Ext.container.Viewport',
			requires : ['Ext.layout.container.Fit', 'MyApp.view.Main'],
			
			 layout : {
				type : 'fit'
			},

			items : [{
						xtype : 'app-main'

					}/*
						 * { xtype : 'window', width : '50%', autoShow : true,
						 * height : '50%', layout : 'fit', items : [{ xtype :
						 * 'app-main' }] }
						 */]
		});
