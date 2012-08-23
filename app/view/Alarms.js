Ext.define("minus80.view.Alarms",{
	extend: 'Ext.navigation.View',
	xtype: 'alarmspanel',
	requires: ['Ext.dataview.List', 'minus80.store.Alarms'],
	id: 'alarmsBadge',
	
	config: {
		title: 'Alarms',
		iconCls: 'time',
//need to add the style stuff to the application's .css or index.html file later
		cls: 'alarms',
		
		//make the text look better on mobile sized devices
		scrollable: true,
				
//badgeText: Ext.getStore('alarmsStore').getCount(),
//badgeText: '7',
                	    
		items: [
			//we are using an Ext.navigation.View so it automatically adds a toolbar
			// at the top along with a Back button
//			{ docked: 'top', xtype: "toolbar", title: "Alarms" },{
			{
	   			xtype: 'list',
				title: 'Alarms',
		    	store: 'alarmsStore',
				id: 'alarms-list',
				//indexBar: true,
				
				//gives arrow for more info on the right side, but controller will handle the event
				onItemDisclosure: true,
				
				//formatting template for the list item
		    	itemTpl: '{text}<div class="metadata">{info}</div>',
			}
		]
	}
});