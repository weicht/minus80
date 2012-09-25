Ext.define("minus80.view.Alarms",{
	extend: 'Ext.navigation.View',
	xtype: 'alarmspanel',
	id: 'alarmspanel',
	requires: ['Ext.dataview.List', 'minus80.store.Alarms', 'Ext.plugin.PullRefresh'],
	
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
					'<div class="metadata">Confirmed By: {confirmed_by}</div>',
						'<tpl for="items">',
							'<div class="metadata">{text}: {value}</div>',
						'</tpl>'),

				//Plugin for the pull down effect to refresh the list
				plugins: [
					{
						xclass: 'Ext.plugin.PullRefresh',
						pullRefreshText: 'Pull down to refresh...',
						refreshFn: function(plugin) {
							var store = plugin.up().getStore();
							store.load(function() {
							console.log('calling store.load() within refreshFn')
								//update Alarms badge with total number
								Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(this.getTotalCount());
							});
						}
					}
				],
			}
		]
	}
});



/* OLD...

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
*/
