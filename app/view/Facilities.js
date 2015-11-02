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
			
				//formatting template for the list item
		    	itemTpl: '<div class="title">{text}</div><div class="metadata">{[values.items.length]} Units</div>',

				plugins: [
					{
						xclass: 'Ext.plugin.PullRefresh',
						pullText: 'Pull down to refresh...',
						listeners : {
							latestfetched : function(store) {
								//data has been fetched so let's resync the list view
								// This actually makes the api call twice but is quick to implement for now
								// - o/w, data is fetched but never loaded
								this.getList().getStore().currentPage = 1;
								this.getList().getStore().load();

								//hack to get the Pull to Refresh splash text to go away as it seems to stick at times
								this.getTranslatable().translate(0,0); //hides the PullToRefresh msg
								this.getList().getScrollable().getScroller().scrollToTop(); //makes sure we scroll to top
								this.setState('release'); //gets the plugin back in the proper state - true HACK
							}
						}
					}
				]
			}
		]
	}
});



