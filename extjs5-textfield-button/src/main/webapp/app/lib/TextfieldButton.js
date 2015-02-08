Ext.define('MyApp.lib.TextfieldButton', {
	extend : 'Ext.form.field.Text',
	xtype : 'textfieldbutton',
	requires : ['Ext.form.trigger.Component'],

	needArrowKeys : false,

	triggers : {
		textfieldbutton : {
			type : 'component',
			hideOnReadOnly : true,
			preventMouseDown : false
		}
	},
	buttonText : 'Browse',
	editable : false,
	buttonMargin : 3,
	extraFieldBodyCls : Ext.baseCSSPrefix + 'form-file-wrap',
	inputCls : Ext.baseCSSPrefix + 'form-text-file',
	triggerNoEditCls : '',
	displayField : 'text',
	valueField : 'id',
	childEls : ['browseButtonWrap'],
	initComponent : function() {
		var me = this;
		var value = me.widgetRecord ? me.widgetRecord[me.displayField] : null;
		Ext.apply(me, {
					value : value
				})
		this.callParent(arguments);
	},
	applyTriggers : function(triggers) {
		var me = this, triggerCfg = (triggers || {}).textfieldbutton;

		if (triggerCfg) {
			triggerCfg.component = Ext.apply({
						xtype : 'button',
						ownerCt : me,
						id : me.id + '-button',
						ui : me.ui,
						disabled : me.disabled,
						text : me.buttonText,
						style : me.buttonOnly ? '' : me.getButtonMarginProp()
								+ me.buttonMargin + 'px',
						inputName : me.getName(),
						listeners : {
							scope : me,
							click : me.onButtonClick
						}
					}, me.buttonConfig);

			return me.callParent([triggers]);
		}
	},

	getSubTplData : function(fieldData) {
		var data = this.callParent([fieldData]);
		data.tabIdx = -1;

		return data;
	},
	onRender : function() {
		var me = this, inputEl, button, buttonEl, trigger;
		me.callParent(arguments);

		inputEl = me.inputEl;
		inputEl.dom.name = ''; // name goes on the fileInput, not the text
		// input

		trigger = me.getTrigger('textfieldbutton');
		button = me.button = trigger.component;
		me.fileInputEl = button.fileInputEl;
		buttonEl = button.el;

		if (me.buttonOnly) {
			me.inputWrap.setDisplayed(false);
			me.shrinkWrap = 3;
		}

		// Ensure the trigger element is sized correctly upon render
		trigger.el.setWidth(buttonEl.getWidth() + buttonEl.getMargin('lr'));
		if (Ext.isIE) {
			me.button.getEl().repaint();
		}

	},
	getTriggerMarkup : function() {
		return '<td id="'
				+ this.id
				+ '-browseButtonWrap" data-ref="browseButtonWrap" role="presentation"></td>';
	},
	onButtonClick : function() {
		var me = this;
		me.fireEvent('onButtonClick', me);
		var popupWindow = Ext.widget(me.popupWindow);
		popupWindow.widgetRecord = me.widgetRecord;
		popupWindow.on('beforedestroy', function(popupWindow, eOpts) {
					me.setValue(popupWindow.widgetRecord);
				});
		popupWindow.show();
	},
	setValue : function(widgetRecord) {
		var me = this;
		me.widgetRecord = widgetRecord;
		me.setRawValue(me.getDisplayField(me.widgetRecord));
		return me.mixins.field.setValue.call(me, me.widgetRecord);
	},
	rawToValue : function(value) {
		this.setDisplayField(this.widgetRecord, value);
		return value
	},
	reset : function() {
		var me = this, clear = me.clearOnSubmit;
		if (me.rendered) {
			me.button.reset(clear);
			me.fileInputEl = me.button.fileInputEl;
			if (clear) {
				me.inputEl.dom.value = '';
				// Reset the underlying value if we're clearing it
				Ext.form.field.File.superclass.setValue.call(this, null);
			}
		}
		me.callParent();
	},
	onShow : function() {
		this.callParent();
		this.button.updateLayout();
	},

	onDisable : function() {
		this.callParent();
		this.button.disable();
	},

	onEnable : function() {
		this.callParent();
		this.button.enable();
	},
	onDestroy : function() {
		this.fileInputEl = this.button = null;
		this.callParent();
	},

	getButtonMarginProp : function() {
		return 'margin-left:';
	},
	getDisplayField : function(obj) {
		var me = this;
		if (obj && obj.isModel) {
			return obj.get(me.displayField);
		} else if (Ext.isObject(obj)) {
			return obj[me.displayField];
		} else {
			return null;
		}
	},
	setDisplayField : function(obj, value) {
		var me = this;
		if (obj && obj.isModel) {
			obj.set(displayField, value);
		} else if (Ext.isObject(obj)) {
			obj[me.displayField] = value;
		}
		me.widgetRecord = obj;
	},
	privates : {
		getFocusEl : function() {
			return this.button;
		}
	}
})