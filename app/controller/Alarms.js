Ext.define("minus80.controller.Alarms",{
	extend: 'Ext.app.Controller',
	requires: ['minus80.store.Alarms'],

	config: {
		//if i turn this one, Settings gets loaded twice b/c it's declared in the app.js file too
		// but if I turn it off in app.js, nothing loads
		stores: ['Alarms'],
		refs: {
			//these are defined with id's in the Alarms view
//			alarmsForm: '#alarmsForm',
		},
		control:{
		}
	},
	
	launch: function(){
		this.callParent();

		//load the Alarms
		Ext.getStore('alarmsStore').load(function() {
			//update Alarms badge with total number
			Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(this.getTotalCount());
		});
	}//end launch: function()
});


