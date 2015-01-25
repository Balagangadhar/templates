Ext.define('MyApp.view.Main', {
	extend : 'Ext.form.Panel',
	itemId : 'mainPanel',
	xtype : 'app-main',
	itemId : 'appmain',
	trackResetOnLoad : true,
	autoScroll : true,
	requires : ['MyApp.lib.CodeEditor'],
	initComponent : function() {
		me = this;
		me.model = me.getSampleModel();

		me.codeMirror = Ext.widget('codeeditor', {
					name : 'code',
					width : '100%',
					height : '500',
					value : 'Click on Load record to load sample code',
					themeSelector : true,
					tButtons : me.createTBarButtons(),
					listeners : {
						// You can listen all the events which are fired
						// from codemirror
						'change' : function(a, b) {
						},
						'changes' : function(editor, changes) {
						},
						'beforeChange' : function(editor, changeObject) {
						},
						'focus' : function(editor) {
						}
					}
				});

		Ext.apply(this, {
					items : [me.codeMirror]
				})

		this.callParent(arguments);
	},
	listeners : {
		'dirtychange' : function(form, dirty) {
			console.log('form : dirtychange', dirty)
		}
	},
	getSampleModel : function() {
		Ext.define('Project', {
					extend : 'Ext.data.Model',
					fields : [{
								name : 'code'
							}]
				});
		var model = Ext.create('Project');
		model
				.set(
						'code',
						'@Controller\n@RequestMapping(value = ValidationController.BASE_URL)\npublic class ValidationController {\n	protected final static String BASE_URL = "validator";\n	@RequestMapping(value = "/validations", method = RequestMethod.GET)\n	@ResponseBody\n	public ArrayList<Issue> getAll() {\n		ArrayList<Issue> models = new ArrayList<Issue>();\n		models.add(new Issue(1, "error", "Error at line number 1"));\n		models.add(new Issue(3, "warning", "Error at line number 3"));\n		models.add(new Issue(4, "error", "Error at line number 4"));\n		models.add(new Issue(5, "error", "Error at line number 5"));\n		models.add(new Issue(7, "warning", "Warning at line number 7"));\n		models.add(new Issue(8, "error", "Error at line number 8"));\n		models.add(new Issue(10, "warning", "Warning at line number 10"));\n		return models;\n	}');
		model.commit();
		return model;
	},
	createTBarButtons : function() {
		var me = this;
		return [{
			text : 'Validate',
			handler : function() {
				Ext.Ajax.request({
							url : 'action/validator/validations',
							success : function(response) {
								var markers = Ext.decode(response.responseText);
								me.codeMirror.showMarkers(markers);
							}
						});

			}
		}, {
			text : 'Load Record',
			handler : function() {
				me.loadRecord(me.model);
			}
		}, {
			text : 'Update Record',
			handler : function() {
				me.updateRecord(me.getRecord());
			}
		}, {
			text : 'Get Record',
			handler : function() {
				console.log(me.getRecord());
			}
		}, {
			text : 'Is Form Dirty',
			handler : function() {
				console.log(me.isDirty());
			}
		}]
	}
});
