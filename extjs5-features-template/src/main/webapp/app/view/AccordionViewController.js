Ext.define('MyApp.view.AccordionViewController', {
			extend : 'Ext.app.ViewController',
			alias : 'controller.accordionviewcontroller',
			getActivePanel : function() {
				var accordion = this.view.lookupReference('accordionview');
				var activePanel = Ext.getCmp(accordion.id)
						.child("[collapsed=false]");
				console.log(activePanel);
				Ext.Msg.alert('Active Panel Title', activePanel.title);
			},
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