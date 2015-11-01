Ext.define("minus80.view.Alarms",{
	extend: 'Ext.navigation.View',
	xtype: 'alarmspanel',
//	id: 'alarmspanel',
	requires: ['Ext.dataview.List', 'minus80.store.Alarms', 'Ext.plugin.PullRefresh'],
//			   'Ext.Anim', 'Ext.Button'],
	
	config: {
		title: 'Alarms',
		iconCls: 'time',
		
		//make the text look better on mobile sized devices
		scrollable: true,
		styleHtmlContent: true,

		items: [
			//we are using an Ext.navigation.View so it automatically adds a toolbar
			// at the top along with a Back button
			{
	   			xtype: 'list',
				title: 'Alarms',
		    	store: 'alarmsStore',
				id: 'alarms-list',
			
				//indexBar: true,

				//formatting template for the list item
//		    	itemTpl: '<div class="title">{text}</div><div class="metadata">{[values.items.length]} Units</div>',
		    	itemTpl: new Ext.XTemplate(
			    	'<div class="title">{text}</div>',
//					'<div class="metadata">Confirmed By: {confirmed_by}</div>',

			        '<tpl if="alarm_state &gt; 0 && alarm_confirmed != null && alarm_confirmed != 0">',
						'<div class="metadata">Confirmed By: {confirmed_by}</div>',
       				'</tpl>',

//					'<div class="confirmplaceholder"></div>',
						'<tpl for="items">',
//							'<div class="metadata">{text}: {value}</div>',
							'<div class="metadata">{formatted_value}</div>',
						'</tpl>'),
            
				//Plugin for the pull down effect to refresh the list
				plugins: [
					{
						xclass: 'Ext.plugin.PullRefresh',
						pullText: 'Pull down to refresh...',
						listeners : {
							latestfetched : function(store) {
								var store = this.getList().getStore();
								// store.currentPage = 1;
						  //       store.load(function() {
								// 	//update Alarms badge with total number
								// 	Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(this.getTotalCount());
								// });

								//update Alarms badge with total number
								Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(store.getTotalCount());

								//hack to get the Pull to Refresh splash text to go away as it seems to stick at times
								this.getTranslatable().translate(0,0); //hides the PullToRefresh msg
								this.getList().getScrollable().getScroller().scrollToTop(); //makes sure we scroll to top
								this.setState('release'); //gets the plugin back in the proper state
							}
						}
					}
				]
			}
		]
	}
});


