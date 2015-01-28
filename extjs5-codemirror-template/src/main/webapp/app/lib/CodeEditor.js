Ext.define('MyApp.lib.CodeEditor', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.codeeditor',
			mixins : {
				field : 'Ext.form.field.Field'
			},
			value : "",

			rtlMoveVisually : false,

			readOnly : false,

			showCursorWhenSelecting : false,

			lineWrapping : false,

			lineNumbers : true,

			firstLineNumber : 1,

			fixedGutter : true,

			enableMatchBrackets : true,

			defaultTheme : 'eclipse',

			gutter : true,

			styleActiveLine : true,

			mode : 'javascript',

			height : '100%',

			width : '100%',

			gutters : ["CodeMirror-lint-markers", "CodeMirror-linenumbers",
					"CodeMirror-foldgutter"],

			tButtons : [],

			bButtons : [],

			foldGutter : true,

			themeSelector : false,

			isDirty : function() {
				return this.dirty;
			},

			setDirty : function(dirty) {
				this.dirty = dirty;
				this.fireEvent('dirtychange', dirty);
			},
			setValue : function(value) {
				if (Ext.isFunction(this.editor.setValue)) {
					this.editor.setValue(value);
					this._originalValue = value;
					this.setDirty(false);

				}
			},
			getModelData : function(includeEmptyText, isSubmitting) {
				var field = this, data = null;
				if (!field.disabled && (field.submitValue || !isSubmitting)) {
					data = {};
					data[field.getFieldIdentifier()] = this.editor.getValue();
				}
				return data;
			},

			initComponent : function() {
				var me = this;
				me.editor = Ext.widget('box');
				me._originalValue = me.value;

				var tButtons = me.tButtons
						? Ext.Array.push([], me.tButtons)
						: [];
				var bButtons = me.bButtons
						? Ext.Array.push([], me.bButtons)
						: [];
				if (me.themeSelector) {
					tButtons.push('->');
					tButtons.push(me.createThemeComboBox(me));
				}
				Ext.apply(me, {
							items : [me.editor],
							tbar : tButtons,
							bbar : bButtons
						})
				me.callParent(arguments);

			},
			listeners : {
				afterrender : function() {
					this.initialiseCodeMirror()
				}
			},
			initialiseCodeMirror : function() {
				var me = this;
				me.editor = CodeMirror(document.getElementById(me.editor.id), {
							value : me.value,
							rtlMoveVisually : me.rtlMoveVisually,
							readOnly : me.readOnly,
							showCursorWhenSelecting : me.showCursorWhenSelecting,
							lineWrapping : me.lineWrapping,
							lineNumbers : me.lineNumbers,
							firstLineNumber : me.firstLineNumber,
							fixedGutter : me.fixedGutter,
							theme : me.defaultTheme,
							gutter : me.gutter,
							gutters : me.gutters,
							foldGutter : me.foldGutter,
							matchBrackets : me.enableMatchBrackets,
							styleActiveLine : me.styleActiveLine,
							mode : me.mode,

							lint : {
								"getAnnotations" : CodeMirror.lint.javascript,
								"async" : me.async
							},
							extraKeys : {
								"Ctrl-Space" : "autocomplete",
								"Ctrl-R" : "replace"
							}

						});
				me.editor.setSize(me.width, me.height);
				me.registerEvents();
			},
			registerEvents : function() {
				var me = this;
				me.editor.on('change', function(editor, changedObject) {
							me.updateFieldDirty(editor, me);
							me.fireEvent('change', editor, changedObject);
						});

				me.editor.on('changes', function(editor, changes) {
							me.fireEvent('changes', editor, changes);
						});
				me.editor.on('beforeChange', function(editor, changedObject) {
							me.fireEvent('beforeChange', editor, changedObject);
						});

				me.editor.on('focus', function(editor) {
							me.fireEvent('focus', editor);
						});

			},
			updateFieldDirty : function(editor, me) {
				me.setDirty(me._originalValue != editor.getValue());
			},
			createThemeComboBox : function(me) {
				return {
					xtype : 'combo',
					store : Ext.create('Ext.data.Store', {
								fields : ['name'],
								data : [{
											"name" : "default"
										}, {
											"name" : "eclipse"
										}, {
											"name" : "neo"
										}, {
											"name" : "night"
										}, {
											"name" : "paraiso-dark"
										}, {
											"name" : "rubyblue"
										}, {
											"name" : "the-matrix"
										}, {
											"name" : "twilight"
										}, {
											"name" : "vibrant-ink"
										}, {
											"name" : "xq-dark"
										}, {
											"name" : "xq-light"
										}]
							}),
					emptyText : 'Select A Theme',
					queryMode : 'local',
					editable : false,
					displayField : 'name',
					valueField : 'name',
					listeners : {
						'change' : function(combo, newValue, oldValue, eOpts) {
							me.editor.setOption("theme", newValue);
						}
					}
				}
			},
			showMarkers : function(issues) {
				CUSTOMLINT(this.editor, issues);
			}
		});

/*
 * Ctrl-F / Cmd-F Start searching Ctrl-G / Cmd-G Find next Shift-Ctrl-G /
 * Shift-Cmd-G Find previous Shift-Ctrl-F / Cmd-Option-F Replace Shift-Ctrl-R /
 * Shift-Cmd-Option-F Replace all
 */