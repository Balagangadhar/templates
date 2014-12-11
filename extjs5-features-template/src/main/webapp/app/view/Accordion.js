Ext.define('MyApp.view.Accordion', {
			extend : 'Ext.panel.Panel',
			xtype : 'accordionview',
			title : 'Accordion View',
			reference : 'accordionview',
			controller : 'accordionviewcontroller',
			layout : 'accordion',
			items : [{
						title : 'Panel 1',
						html : 'Panel content!',
						reference : 'test1'
					}, {
						title : 'Panel 2',
						html : 'Panel content!'
					}, {
						title : 'Panel 3',
						html : 'Panel content!'
					}],
			initComponent : function() {
				this.callParent(arguments);
			}

		});