Ext.define('MyApp.view.DashboardViewController', {
			extend : 'Ext.app.ViewController',
			alias : 'controller.dashboardviewcontroller',
			onRefreshClick : function() {
				this.reloadGrid();
			},
			reloadGrid : function() {
				var grid = this.lookupReference('dashboard-grid');
				grid.getStore().reload();
			}
		});