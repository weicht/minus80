Ext.define("minus80.controller.Settings",{
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			//these are defined with id's in the Settings view
			settingsSaveBtn: '#settings-save-btn',
			settingsForm: '#settingsForm'
		},
		control:{
			//attach a callback method to the Save button bring tapped
			settingsSaveBtn: {
				tap: 'save'
			}
		}
	},
	
	launch: function(){
		this.callParent();

		//preload the Settings info on launch
		this.getSettingsForm().setRecord( Ext.getStore('settingsStore').getAt(0) );
	},

	//save the user's settings to localstorage	
	save: function(){
		//grab the username/password from the Settings form
		var settingsValues = this.getSettingsForm().getValues();
//		console.log('username: '+settingsValues.username+' // password: '+settingsValues.password);

		//validate username/password w/ the server
		Ext.Ajax.request({
			url: '/user/validate_login.php',
			params: settingsValues,
			method: 'GET',
			success: function (result, request) {
				var text = result.responseText;
//				console.log('result.responseText: '+result.responseText);

		        // process server response here
				var response = Ext.decode(result.responseText);
//console.log('response.success: '+response.success);
				if( response.success == true ){
					Ext.Msg.alert("Settings", "User credentials validated");
					
					//update the settings in storage
					var store = Ext.getStore('settingsStore');
			//		console.log('Current user creds - name: '+store.getAt(0).data.username+' :: pass: '+store.getAt(0).data.password);
			
					//delete existing settings
					if(store.data.length > 0){
						//console.log('Current user creds - name: '+store.getAt(0).data.username+' :: pass: '+store.getAt(0).data.password);
						
						//Clear out the store to ensure only 1 record exist
						//TODO: Probably a method to call vice looping but this is working now...
						store.each(function(record){
							//console.log("Removing " + record.data.username);
							store.remove(record);
						});
					} else {
						//need to create the local storage
						store.create();
					}
		
					//add the username/password
					store.add({username: settingsValues.username, password: settingsValues.password});
					
					//finally, save our Settings data to localStorage
					store.sync();

				} else {
					Ext.Msg.alert("Settings", "User credentials failed to validate");
				}
			},
			failure: function (result, request) {
				Ext.Msg.alert("ERROR", "Failed to validate with the server");
			}
		});
	}
});

