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
		
//			toolbar: false,

//badgeText: Ext.getStore('alarmsStore').getCount(),
//badgeText: '7',
			    
		items: [
			//we are using an Ext.navigation.View so it automatically adds a toolbar
			// at the top along with a Back button
//			{ docked: 'top', xtype: "toolbar", title: "Alarms" },{
			{
//	   			xtype: 'nestedlist',
	   			xtype: 'list',
				title: 'Facilities',
		    	store: 'facilitiesStore',
				id: 'facilities-list',
			
				//indexBar: true,

/*
			    detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true,
             		tpl: 'Text: {text}<BR>Info: {info}'
                },
*/
                				
//				//gives arrow for more info on the right side, but controller will handle the event
//				onItemDisclosure: true,
				
				//formatting template for the list item
//		    	itemTpl: '{text}<div class="metadata">{info}</div>',

		    	itemTpl: '{text}<div class="metadata">{[values.items.length]} units</div>',
//itemTpl: 'Nothing',

/*
   	        	getItemTextTpl: function(){
					var tplConstructor = '{text}' +
					'<tpl if="type === \'facility\'">'+
							'<div class="metadata">{[values.items.length]} units</div>' +
					'</tpl>' +
					'<tpl if="type === \'unit\'">'+
							'<div class="metadata">{[values.items.length]} devices</div>' +
					'</tpl>';
					return tplConstructor;
				}
*/
			}
		]
	}
});



