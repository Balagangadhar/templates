Ext.define('MyApp.controller.Main', {
			extend : 'Ext.app.Controller',
			views : [],
			routes : {
				'home' : {
					action : 'onHome'
				},
				'mvc' : {
					action : 'onMvc'
				},
				'routing' : {
					action : 'onRouting'
				},
				'mvvm' : {
					action : 'onMvvm'
				},
				'viewcontroller' : {
					action : 'onViewController'
				},
				'breadcrumb' : {
					action : 'onBreadcrumb'
				},
				'session' : {
					action : 'onSession'
				}
			},
			init : function() {
				console.log('MyApp.controller.Main - Initialized');
				this.control({
							'listview' : {
								'cellclick' : this.handleListViewCellClick
							},
							'breadcrumb-view' : {
								'selectionchange' : this.handlBreadCrumbclick
							}
						});
			},
			onHome : function() {
				console.log('Home Page : Redirecting it to mvc demo');
				this.redirectTo('mvc');
			},
			onMvc : function() {
				console.log('onMvc');
				var viewport = Ext.ComponentQuery.query('viewport')[0];
				viewport.removeAll(true);
				viewport.add(Ext.widget('list-view', {
							title : 'MVC Demo'
						}));
			},
			onRouting : function() {
				console.log('onRouting');
				var viewport = Ext.ComponentQuery.query('viewport')[0];
				viewport.removeAll(true);
				viewport.add(Ext.widget('list-view', {
							title : 'Routing Demo'
						}));
			},
			onMvvm : function() {
				console.log('onMvvm');
				var viewport = Ext.ComponentQuery.query('viewport')[0];
				viewport.removeAll(true);
				var listViewRecord = Ext.create('MyApp.model.List');
				listViewRecord.set('name', 'sampleName');
				var viewModelMainPanel = Ext.widget('main-viewmodel', {
							listViewRecord : listViewRecord
						});
				viewport.add(viewModelMainPanel);
			},
			onViewController : function() {
				console.log('onViewController');
				var viewport = Ext.ComponentQuery.query('viewport')[0];
				viewport.removeAll(true);
				viewport.add(Ext.widget('accordion-view'));

			},
			onBreadcrumb : function() {
				console.log('OnBreadcrumb');
				var viewport = Ext.ComponentQuery.query('viewport')[0];
				viewport.removeAll(true);
				viewport.add(Ext.widget('list-view', {
							title : 'Breadcrumb Demo'
						}));
			},
			onSession : function() {
				console.log('OnSession');
				var viewport = Ext.ComponentQuery.query('viewport')[0];
				viewport.removeAll(true);
				viewport.add(Ext.widget('session-user-list', {
							title : 'Session Demo'
						}));
			},
			handleListViewCellClick : function(view, td, cellIndex, record, tr,
					rowIndex, e, eOpts) {
				console.log('handlListViewCellClick in Controller');
			},
			handlBreadCrumbclick : function(breadcrumbview, node, eOpts) {
				if (node && node.data.id !== 'root') {
					console.log('node.breadcrumbNodeId')
				}
			}
		});
