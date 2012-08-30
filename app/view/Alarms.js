Ext.define("minus80.view.Alarms",{
	extend: 'Ext.navigation.View',
	xtype: 'alarmspanel',
	requires: ['Ext.dataview.List', 'minus80.store.Alarms'],
	
	config: {
		title: 'Alarms',
		iconCls: 'time',
//need to add the style stuff to the application's .css or index.html file later
		cls: 'alarms',
		
		//make the text look better on mobile sized devices
		scrollable: true,
                	    
		items: [
			//we are using an Ext.navigation.View so it automatically adds a toolbar
			// at the top along with a Back button
			{
	   			xtype: 'list',
				title: 'Alarms',
		    	store: 'alarmsStore',
				id: 'alarms-list',

				//formatting template for the list item
		    	itemTpl: '{text}<div class="metadata">{[values.items.length]} devices</div>',
			}
		]
	}
});