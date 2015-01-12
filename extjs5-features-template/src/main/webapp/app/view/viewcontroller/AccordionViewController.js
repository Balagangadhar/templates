Ext.define('MyApp.view.viewcontroller.AccordionViewController', {
			extend : 'Ext.app.ViewController',
			alias : 'controller.accordion-viewcontroller',
			onPanel1Expand : function() {
				console.log('onPanel1Expand');
				var bbarlabel = this.view.lookupReference('bbarlabel');
				bbarlabel.setText('Panel One Expanded');
			},
			onPanel2Expand : function() {
				console.log('onPanel2Expand');
				var bbarlabel = this.view.lookupReference('bbarlabel');
				bbarlabel.setText('Panel Two Expanded');
			},
			onPanel3Expand : function() {
				console.log('onPanel3Expand');
				var bbarlabel = this.view.lookupReference('bbarlabel');
				bbarlabel.setText('Panel Three Expanded');
			}
		});