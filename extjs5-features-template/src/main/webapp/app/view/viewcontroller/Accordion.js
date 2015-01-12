Ext.define('MyApp.view.viewcontroller.Accordion', {
	extend : 'Ext.panel.Panel',
	xtype : 'accordion-view',
	title : 'Accordion View',
	reference : 'accordion-view',
	controller : 'accordion-viewcontroller',
	layout : 'accordion',
	items : [{
				title : 'Panel 1',
				html : 'Panel content!',
				listeners : {
					expand : 'onPanel1Expand'
				}
			}, {
				title : 'Panel 2',
				html : 'Panel content!',
				listeners : {
					expand : 'onPanel2Expand'
				}
			}, {
				title : 'Panel 3',
				html : 'Panel content!',
				listeners : {
					expand : 'onPanel3Expand'
				}
			}],
	tbar : [{
				xtype : 'breadcrumb-view'
			}],
	bbar : [{
				text : 'Panel One Expanded',
				reference : 'bbarlabel'
			}, {
				xtype : 'label',
				html : '<- This gets updated Whenever accordion panel gets expanded'
			}],
	initComponent : function() {
		this.callParent(arguments);
	}

});