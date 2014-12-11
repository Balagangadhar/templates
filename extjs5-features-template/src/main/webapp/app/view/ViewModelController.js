Ext.define('MyApp.view.ViewModelController', {
			extend : 'Ext.app.ViewController',
			alias : 'controller.viewmodelcontroller',
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