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
				var alarmData = "";
				this.each(function(record){
//console.log('cb: '+record.data.confirmed_by);
					alarmData += record.data.text+'<div class="metadata">Confirmed By: '+record.data.confirmed_by+'<BR>';				
					for(var i in record.data.items){
						alarmData += record.data.items[i].text+': '+record.data.items[i].value+'<BR>';
					}
					alarmData += '</div><HR>';				
				});
				alarmData += '</div>';				
//console.log('alarmData: '+alarmData);

				var testing = {
					xtype  : 'panel',
					config :{
						layout: 'fit',								
						scrollable: true,
						styleHtmlContent: true,
					},
					items : [{
						html : alarmData,
						padding: 15
					}]
				};
			
				panel.add(testing);
			}//end getTotalCount()>0
		});
	}//end launch: function()
});



/*
		tpl: new Ext.XTemplate(
			'<tpl if="type === \'facility\'">',
					'<div class="metadata">{[values.items.length]} units</div><HR>',
					'<tpl for="items">',
						'<div class="metadata">',
							'<div class="name">Unit #{[xindex]} {text}</div>',
						'</div>',
					'</tpl>',
			'</tpl>',
			'<tpl if="type === \'unit\'">',
					'<div class="metadata">{[values.items.length]} devices</div><HR>',
					'<tpl for="items">',
						'<div class="metadata">',
							'<div class="name">Device #{[xindex]} {text}</div>',
						'</div>',
					'</tpl>',
			'</tpl>')
*/







/*
			//build the Alarms panel
			if(this.getTotalCount()>0){
				//build Alarms listing...
			console.log('Building Alarms Listing...');

				this.each(function(record){
	console.log(record.data);
	//console.log('title: '+record.data.get('text'));			
	
					for(var i in record.data.items){
					console.log('items['+i+']: '+record.data.items[i]);
					console.log(record.data.items[i]);
					}
	
					var testing = {
						xtype       : 'fieldset',
						title       : record.data.text,
			//			collapsible : true,
			//		scrollable: true,
						defaults    : {
							xtype: 'textfield',
							readOnly: true,
							clearIcon: false
						},
						items       : [{
							label : 'alarm.text',
							name       : 'x',
							value      : 'xyz',
							clearIcon: false,
						},{
							html : ''+record.data.text+'<div class="metadata">testing</div>',
							label : 'y',
							name       : 'y',
							value      : 'abc',
							clearIcon: false
						},{
							xtype: 'checkboxfield',
							name: 'cool',
							label: 'Cool',
							checked: true,
							html: 'checkboxfield html'
						},{
							label : 'y',
							name       : 'y',
							value      : 'abc',
							clearIcon: false
						},{
							label : 'y',
							name       : 'y',
							value      : 'abc',
							clearIcon: false
						}]
					}
				
					panel.add(testing);
				});//end this.each()
			}//end if()
*/
