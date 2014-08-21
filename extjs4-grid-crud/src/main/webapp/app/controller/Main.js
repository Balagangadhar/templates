Ext.define('MyApp.controller.Main', {
			extend : 'Ext.app.Controller',
			stores : ['MyApp.store.Article'],
			models : ['MyApp.model.Article'],
			views : ['MyApp.view.Main', 'MyApp.view.EditView',
					'MyApp.view.ListView'],
			init : function() {
				console.log('MyApp.controller.Main - Initialized');
				this.control({
							'app-grid button[action=createArticle]' : {
								click : this.createArticle
							},
							'app-grid button[action=refreshArticleGrid]' : {
								click : this.refreshArticleGrid
							},
							'app-grid' : {
								itemdblclick : this.updateArticle,
								deleteArticle : this.deleteArticle
							},
							'create-article' : {
								'saveArticle' : this.saveArticle
							}
						});
			},
			openCreateUpdateView : function(grid, model, action) {
				var form = Ext.widget('create-article', {
							grid : grid,
							model : model,
							action : action
						});
				var title = action === 'create'
						? 'Create Article'
						: 'Update Article';
				Ext.widget('window', {
							title : title,
							width : 400,
							modal : true,
							layout : 'fit',
							items : [form]
						}).show();
				form.loadRecord(model);

			},
			refreshArticleGrid : function(button) {
				button.up('grid').getStore().reload();
			},
			updateArticle : function(view, record, item, index, e, eOpts) {
				console.log('MyApp.controller.Main - updateArticle');
				this.openCreateUpdateView(view.up('grid'), record, 'update');
			},
			createArticle : function(button) {
				console.log('MyApp.controller.Main - createArticle');
				var model = Ext.create('MyApp.model.Article');
				this.openCreateUpdateView(button.up('grid'), model, 'create');
			},
			deleteArticle : function(grid, rowIndex, colIndex) {
				console.log('MyApp.controller.Main - deleteArticle');

				grid.setLoading('Deleting...');
				var record = grid.getStore().getAt(rowIndex);
				var articleRecord = Ext.create('MyApp.model.Article');
				articleRecord.set('id', record.get('id'));
				Ext.MessageBox.defaultButton = 'no';
				Ext.MessageBox.confirm('Delete',
						'Do you want to delete this Article', function(btn) {
							if (btn === 'yes') {
								articleRecord.destroy({
											callback : function(records,
													operation) {
												if (operation.wasSuccessful()) {
													grid.getStore()
															.removeAt(rowIndex);
													grid.setLoading(false);
													grid.getStore()
															.commitChanges();
												} else {
													grid.setLoading(false);
												}
											},
											scope : this
										});
							} else {
								grid.setLoading(false);
							}

						});

			},
			saveArticle : function(button) {
				console.log('MyApp.controller.Main - saveArticle');
				var form = button.up('form');
				var win = form.up('window');
				win.setLoading('Saving...'); 
				form.updateRecord(form.getRecord());
				var updatedRecord = form.getRecord();
				form.getRecord().save({
							success : function(records, operation) {
								form.grid.getStore().reload();
								win.setLoading(false); 
								win.close();
							},
							failure : function(records, operation) {
								win.setLoading(false); 
								form.showErrors(operation.responseData.msg);
							},
							scope : this
						});

			}
		});
