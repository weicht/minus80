Ext.define("minus80.view.Facilities",{
	extend: 'Ext.navigation.View',
	xtype: 'facilitiespanel',
	requires: ['Ext.dataview.NestedList', 'minus80.store.Facilities'],
	
	config: {
		title: 'Facilities',
		iconCls: 'team',
//need to add the style stuff to the application's .css or index.html file later
//		cls: 'facilities',
		
		//make the text look better on mobile sized devices
		scrollable: true,
		
		items: [
			//we are using an Ext.navigation.View so it automatically adds a toolbar
			// at the top along with a Back button
			{
	   			xtype: 'list',
				title: 'Facilities',
		    	store: 'facilitiesStore',
				id: 'facilities-list',
			
				//indexBar: true,

				//formatting template for the list item
		    	itemTpl: '{text}<div class="metadata">{[values.items.length]} units</div>',
			}
		]
	}
});



