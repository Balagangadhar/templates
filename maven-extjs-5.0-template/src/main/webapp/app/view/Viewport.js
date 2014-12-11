/**
 * The main application viewport, which displays the whole application
 * 
 * @extends Ext.Viewport
 */
Ext.define('MyApp.view.Viewport', {
	extend : 'Ext.Viewport',
	layout : 'fit',

	requires : [],

	initComponent : function() {
		var me = this;

		Ext.apply(me, {
			items : [ {
				xtype : 'panel',
				title : 'ExtJS5 sample application'
			} ]
		});

		me.callParent(arguments);
	}
});
