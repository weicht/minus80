Ext.define("minus80.view.Settings", {
    extend: 'Ext.form.FormPanel',
	requires: ['Ext.form.FieldSet', 'Ext.field.Password'],
	xtype: 'settingspanel',
	id: 'settingsForm',

	//form fields are preloaed within the Settings Controller launth() fcn

	config:{
		title: 'Settings',
		iconCls: 'settings',

		items: [
			{
				docked: 'top',
				xtype: "toolbar",
		        title: "Settings"
			},
			{
			    xtype: 'fieldset',
			    title: 'User Settings',
			    instructions: 'Please enter the information above.',
			    defaults: {
					clearIcon: true,
					autoCapitalize: false
				},
			    items: [{
			    	id: 'username',
			        xtype: 'textfield',
			        name : 'username',
			        label: 'Username'
			    },{
			    	id: 'password',
			        xtype: 'passwordfield',
			        name : 'password',
			        label: 'Password'
			    }],
			},
			{
			    xtype: 'button',
				id: 'settings-save-btn',
	            text: 'Save',
	            ui: 'confirm',
			}
		]
	}	    
});
