Ext.define('MyApp.view.Dashboard', {
			extend : 'Ext.panel.Panel',
			xtype : 'dashboard',
			layout : 'accordion',
			controller : 'dashboardviewcontroller',
			title : 'Citi Account Dashboarding',
			items : [{
						xtype : 'dashboard-grid',
						title : 'Corporate Relocation'
					}, {
						title : 'Citi Mortgage Web.com'
					}, {
						title : 'SalesForce.com'
					}],
			tools : [{
						type : 'refresh',
						tooltip : 'Refresh form Data',
						listeners : {
							click : 'onRefreshClick'
						}
					}]
		});