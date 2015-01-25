Ext.define('MyApp.lib.CustomCodeMirror', {
	extend : 'Ext.container.Container',
	alias : 'widget.codemirror',

	value : "",

	rtlMoveVisually : false,

	readOnly : false,

	showCursorWhenSelecting : false,

	lineWrapping : false,

	lineNumbers : true,

	firstLineNumber : 1,

	fixedGutter : true,

	enableMatchBrackets : true,

	theme : 'eclipse',

	gutter : true,

	styleActiveLine : true,

	mode : 'javascript',
	
	codeMirrorHeight : '100%',
	
	codeMirrorWidth : '100%',
	

	// gutters : ["CodeMirror-linenumbers"],
	gutters : ["CodeMirror-lint-markers", "CodeMirror-linenumbers",
			"CodeMirror-foldgutter"],

	foldGutter : true,

	initComponent : function() {
		console.log('initComponent : codemirror1');
		var me = this;
		me.editor = Ext.widget('box', {
					cls : 'background-color : red !important'
				});
		me._originalValue = me.value;
		me.trigger = Ext.widget('trigger', {
			dirty : false,
			hidden : true,
			name : me.name,
			isDirty : function() {
				return this.dirty;
			},
			setDirty : function(dirty) {
				this.dirty = dirty;
				this.fireEvent('dirtychange', dirty);
			},
			setValue : function(value) {
				if (Ext.isFunction(me.editor.setValue)) {
					me.editor.setValue(value);
					me._originalValue = value;
					this.dirty = false;
				}
			},
			getModelData : function(includeEmptyText, isSubmitting) {
				var trigger = this, data = null;
				if (!trigger.disabled && (trigger.submitValue || !isSubmitting)) {
					data = {};
					data[trigger.getFieldIdentifier()] = me.editor.getValue();
				}
				return data;
			}

		})

		Ext.apply(me, {
					items : [me.editor, me.trigger]
				})
		me.callParent(arguments);

	},
	listeners : {
		afterrender : function(me) {
			me.initialiseCodeMirror(me);
		}
	},

	initialiseCodeMirror : function(me) {
		me.editor = CodeMirror(document.getElementById(me.editor.id), {
					value : me.value,
					rtlMoveVisually : me.rtlMoveVisually,
					readOnly : me.readOnly,
					showCursorWhenSelecting : me.showCursorWhenSelecting,
					lineWrapping : me.lineWrapping,
					lineNumbers : me.lineNumbers,
					firstLineNumber : me.firstLineNumber,
					fixedGutter : me.fixedGutter,
					theme : me.theme,
					gutter : me.gutter,
					gutters : me.gutters,
					foldGutter : me.foldGutter,
					matchBrackets : me.enableMatchBrackets,
					styleActiveLine : me.styleActiveLine,
					mode : me.mode,

					// scrollbarStyle : 'null',
					lint : {
						"getAnnotations" : CodeMirror.lint.javascript,
						// "getAnnotations" :
						// CodeMirror.remoteValidator,
						"async" : true
					},
					extraKeys : {
						"Ctrl-Space" : "autocomplete",
						"Ctrl-R" : "replace"

					}

				});
		me.editor.setSize(me.codeMirrorWidth,me.codeMirrorHeight);

		console.log('codeMirror', me.editor);

		me.registerEvents();
	},

	registerEvents : function() {
		var me = this;
		me.editor.on('change', function(editor, changedObject) {
					me.updateTriggerDirty(editor, me);

					me.fireEvent('change', editor, changedObject);
				});
		me.editor.on('changes', function(editor, changes) {
					me.fireEvent('changes', editor, changes);
				}), me.editor.on('beforeChange',
				function(editor, changedObject) {
					me.fireEvent('beforeChange', editor, changedObject);
				});
		me.editor.on('focus', function(editor) {
					me.fireEvent('focus', editor);
				});

	},

	updateTriggerDirty : function(editor, me) {
		// TODO: chnage to string comp function.
		var dirty = (me._originalValue == editor.getValue()) ? false : true;
		me.trigger.setDirty(dirty);

	}
});

/*
 * Ctrl-F / Cmd-F Start searching Ctrl-G / Cmd-G Find next Shift-Ctrl-G /
 * Shift-Cmd-G Find previous Shift-Ctrl-F / Cmd-Option-F Replace Shift-Ctrl-R /
 * Shift-Cmd-Option-F Replace all
 */