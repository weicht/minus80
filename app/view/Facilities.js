Ext.define("minus80.view.Facilities",{
	extend: 'Ext.navigation.View',
	xtype: 'facilitiespanel',
	requires: ['Ext.dataview.List', 'minus80.store.Facilities', 'Ext.plugin.PullRefresh'],
	
	config: {
		title: 'Facilities',
		iconCls: 'team',
		
		//make the text look better on mobile sized devices
		scrollable: true,
		styleHtmlContent: true,

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
		    	itemTpl: '<div class="title">{text}</div><div class="metadata">{[values.items.length]} Units</div>',

				plugins: [
					{
						xclass: 'Ext.plugin.PullRefresh',
						pullRefreshText: 'Pull down to refresh...',
						refreshFn: function(plugin) {
							var store = plugin.up().getStore();
							store.load(function() {
								//update Facilities badge with total number
								Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(this.getTotalCount());
							});
						}
					}
				],
			}
		]
	}
});



