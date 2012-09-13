Ext.define("minus80.view.Alarms", {
    extend: 'Ext.Panel',
	xtype: 'alarmspanel',
	id: 'alarmsForm',

	//Alarm data is loaded within the Accounts Controller launch() fcn

	config:{
		title: 'Alarms',
		iconCls: 'time',

//need to add the style stuff to the application's .css or index.html file later
		cls: 'alarms',
		
		//make the text look better on mobile sized devices
		scrollable: true,
		items: [
			{
				docked: 'top',
				xtype: "toolbar",
		        title: "Alarms"
			},
		]
	}	    
});

