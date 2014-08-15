Ext.define('MyApp.view.Main', {
	extend : 'Ext.container.Container',
	requires : [ 'Ext.tab.Panel', 'Ext.layout.container.Border' ],
	xtype : 'app-main',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		me = this;
		me.graphContainer = Ext.widget('box', {
			cls : 'graph-container',
			autoScroll : true,
			layout : 'fit'
		});
		me.outerContainer = Ext.widget('panel', {
			region : 'center',
			title : 'Extjs - mXGraph Integration',
			cls : 'graph-container',
			items : [ me.graphContainer ],
			autoScroll : true,
			tbar : me.getContainerTbarButtons(me),
			layout : 'fit'
		});
		Ext.apply(this, {
			items : [ me.outerContainer ]
		})

		this.callParent(arguments);
	},
	listeners : {
		afterrender : function(mainLayout, eOpts) {
			mainLayout.renderGraph();
		}
	},
	renderGraph : function() {
		var mainLayout = this;
		// Checks if the browser is supported
		if (!mxClient.isBrowserSupported()) {
			// Displays an error message if the browser is not
			// supported.
			mxUtils.error('Browser is not supported!', 200, false);
		} else {
			var container = document.getElementById(mainLayout.graphContainer.id);
			// Creates the graph inside the given container
			var editor = new mxEditor();
			var graph = editor.graph;
			var scale = graph.view.scale;
			var bounds = graph.getGraphBounds();
			graph.view.setTranslate(10 - bounds.x / scale, 10 - bounds.y / scale);
			editor.setGraphContainer(container);
			// graph = new mxGraph(container);
			mainLayout.editor = editor;
			mainLayout.graph = graph;
			// Enables rubberband selection
			new mxRubberband(graph);
			graph.setPanning(true);
			graph.setTooltips(true);

			// Gets the default parent for inserting new cells.
			// This
			// is normally the first child of the root (ie.
			// layer 0).
			var parent = graph.getDefaultParent();

			// Adds cells to the model in a single step
			graph.getModel().beginUpdate();
			try {
				var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
				var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
				var e1 = graph.insertEdge(parent, null, '', v1, v2);
			} finally {
				// Updates the display
				graph.getModel().endUpdate();
			}
		}
	},
	getContainerTbarButtons : function(mainLayout) {
		return [ {
			xtype : 'button',
			text : 'Printable View',

			handler : function(button) {
				var editor = mainLayout.editor;
				var preview = new mxPrintPreview(editor.graph);
				preview.open();
			}
		}, '|', {
			xtype : 'button',
			text : 'Hierarchical Layout',
			handler : function(button) {
				mainLayout.executeLayout(mainLayout.editor.graph);
			}
		}, '|', {
			xtype : 'button',
			text : 'Add Dynamic Vertex',
			handler : function(button) {
				var selectedCell = mainLayout.editor.graph.getSelectionCell();
				if (Ext.isEmpty(selectedCell) || selectedCell.vertex !== true) {
					Ext.Msg.alert('warning', 'Please select a vertex');
					return;
				}
				var parent = mainLayout.graph.getDefaultParent();
				Ext.Msg.prompt('Name', 'Please enter vertex name ', function(btn, text) {
					if (btn == 'ok') {
						try {
							var vertex = mainLayout.graph.insertVertex(parent, null, text, 20, 20, 80, 30);
							var edge = mainLayout.graph.insertEdge(parent, null, '', selectedCell, vertex);
						} finally {
							mainLayout.graph.getModel().endUpdate();
							mainLayout.executeLayout(mainLayout.editor.graph);
						}
					}
				});

			}
		}, {
			xtype : 'button',
			text : 'Import XML File',

			handler : function(button) {

				var form = Ext.create('Ext.form.Panel', {
					layout : 'absolute',
					items : [ {
						xtype : 'fileuploadfield',
						labelWidth : 50,
						msgTarget : 'side',
						allowBlank : false,
						anchor : '100%'
					} ],
					buttons : [ {
						text : 'Cancel',
						handler : function(button) {
							var window = button.up('form').up('window');
							window.close();
						}
					}, {
						text : 'Upload',
						handler : function(button) {
							var file = button.up('form').items.items[0].getEl().down('input[type=file]').dom.files[0];
							var reader = new FileReader();
							var window = button.up('form').up('window');
							reader.onload = (function(theFile) {
								return function(e) {
									var doc = mxUtils.parseXml(reader.result);
									var decoder = new mxCodec(doc);
									var node = doc.documentElement;
									decoder.decode(node, mainLayout.editor.graph.getModel());
									window.close();
								};
							})(file);
							reader.readAsBinaryString(file);
						}
					} ]
				});
				Ext.create('Ext.window.Window', {
					autoShow : true,
					title : 'Import XML',
					width : 400,
					layout : 'fit',
					plain : true,
					modal : true,
					items : form
				});

			}
		}, '|', {
			xtype : 'button',
			text : 'XML view',

			handler : function(button) {
				var editor = mainLayout.editor;
				var enc = new mxCodec(mxUtils.createXmlDocument());
				var node = enc.encode(editor.graph.getModel());
				var xmlString = mxUtils.getPrettyXml(node);

				Ext.create('Ext.window.Window', {
					autoShow : true,
					width : 500,
					height : 300,
					layout : 'fit',
					modal : true,
					plain : true,
					items : [ {
						xtype : 'textareafield',
						value : xmlString,
						readOnly : true
					} ]
				})

			}
		} ]
	},
	executeLayout : function(graph) {
		var layout = new mxHierarchicalLayout(graph);
		var parent = graph.getDefaultParent();
		layout.execute(parent);
	}
});