Ext.define("minus80.controller.Main",{
	extend: 'Ext.app.Controller',

   	launch: function(){
		this.callParent();
	},

	init: function(){
		minus80.app.on({
			loginSuccess: this.onLoginSuccess, 
			scope: this
		});
	},

    onLoginSuccess: function(settingsValues){
		//set the global settings
		minus80.app.settings = settingsValues;

		//reload the app
//		minus80.app.fireEvent('launch');
		
		location.reload();
    }
});


