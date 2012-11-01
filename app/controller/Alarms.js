Ext.define("minus80.controller.Alarms",{
	extend: 'Ext.app.Controller',
	requires: ['minus80.store.Alarms'],

	config: {
		//if i turn this one, Settings gets loaded twice b/c it's declared in the app.js file too
		// but if I turn it off in app.js, nothing loads
		stores: ['Alarms'],
		refs: {
			alarmsList: '#alarms-list', //id from the view requires a # prefix
		},
		control:{
//			alarmsList: {
//				itemswipe: 'onItemSwipe'
//			}
		}
	},
	
	launch: function(){
		this.callParent();

		//load the Alarms
		Ext.getStore('alarmsStore').load(function() {
			//update Alarms badge with total number
			Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(this.getTotalCount());
		});
	},
});





/*
	onConfirmButtonTap: function(){
		Ext.Msg.alert('Confirm', 'Confirm tapped');	
		
	    var alarms = this.getAlarmsList();
console.log(alarms);
	    var alarmSelected = alarms.getRecord();
console.log(alarmSelected);
	    var alarmsStore = Ext.getStore('alarmsStore');
console.log(alarmsStore);
	 
	    alarmsStore.remove(alarmSelected);
	    alarmsStore.sync();
	},
	
	onItemSwipe: function (list, idx, target, record, evt) {
//		Ext.Msg.alert('itemswipe inside Alarms Ctrlr', record.data.text);



		if (evt.direction == "right") {
			var del = Ext.create("Ext.Button", {
				ui: "decline",
				text: "Confirm",
				style: "position:absolute;right:0.125in;",
//				handler: this.onConfirmButtonTap,
				scope: this,
				handler: function() {
	//TODO: Make a call out to the confirm.php file to be written next...
					var store = record.stores[0];
					store.remove(record);
//TODO:  Figure out how to make the store.getTotalCount() reflect the new total
// Calling store.sync() causes the proxy to recall the php file and we get a Sencha Warn msg
					store.sync();
	
					//update Alarms badge with total number
					Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(store.getTotalCount());
console.log('New Alarm count: '+store.getTotalCount());
				}
			});
	
			var removeDeleteButton = function() {
				del.destroy();
			};
			del.renderTo(Ext.DomQuery.selectNode(".confirmplaceholder", target.dom));
			list.on({
				single: true,
				buffer: 250,
				itemtouchstart: removeDeleteButton
			});
			list.element.on({
				single: true,
				buffer: 250,
				touchstart: removeDeleteButton
			});
		}
	},
	
//	itemtaphold: function (list, idx, target, record, evt) {
//		Ext.Msg.alert('itemtaphold', record.data.text);
//	}
*/

