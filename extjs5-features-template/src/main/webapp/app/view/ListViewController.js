Ext.define('MyApp.view.ListViewController', {
			extend : 'Ext.app.ViewController',
			alias : 'controller.listviewcontroller',
			openMVC : function() {
				this.redirectTo('mvc');
			},
			openRouting : function() {
				this.redirectTo('routing');
			},
			openMVVM : function() {
				this.redirectTo('mvvm');
			},
			openViewController : function() {
				this.redirectTo('viewcontroller');
			}
		});