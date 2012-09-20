Ext.define("minus80.controller.Alarms",{
	extend: 'Ext.app.Controller',
	requires: ['minus80.store.Alarms'],

	config: {
		//if i turn this one, Settings gets loaded twice b/c it's declared in the app.js file too
		// but if I turn it off in app.js, nothing loads
		stores: ['Alarms'],
		refs: {
			//these are defined with id's in the Settings view
			alarmsForm: '#alarmsForm',
		},
		control:{
		}
	},
	
	launch: function(){
		this.callParent();
		
		var panel = this.getAlarmsForm();

		//load the Alarms
		Ext.getStore('alarmsStore').load(function() {
			//update Alarms badge with total number
			Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(this.getTotalCount());

			if(this.getTotalCount()>0){
				var testing = {
//					extend: 'Ext.Panel',
					xtype  : 'panel',
					data: this.data,
					padding: 5,
					tpl: new Ext.XTemplate(
						'<tpl for="items">',
							'<div class="title">{data.text}</div>',
								'<div class="metadata">Confirmed By: {data.confirmed_by}</div>',
									'<tpl for="data.items">',
											'<div class="metadata">{text}: {value}</div>',
									'</tpl>',
							'<HR>',
						'</tpl>'),
					config :{
						layout: 'fit',								
						scrollable: true,
						styleHtmlContent: true,
//						style: 'text-align: left;',
					}
				};
			
				panel.add(testing);
//				panel.push(testing);
			}//end getTotalCount()>0
		});
	}//end launch: function()
});


