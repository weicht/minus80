Ext.define("minus80.controller.Alarms",{
	extend: 'Ext.app.Controller',
	requires: ['minus80.store.Settings'],

	config: {
		stores: ['Alarms'],
		refs: {
			alarmsList: '#alarms-list', //id from the view requires a # prefix
			alarmsPanel: 'alarmspanel' //xtype requires no # prefix
		},
		control:{
			alarmsList: {
				itemtap: 'showUnitDetail'
			}
		}
	},
	
	launch: function(){
		this.callParent();
	},
	
	showUnitDetail: function(list, index, target, record) {
		console.log('Inside showUnitDetail of Alarms Controller:: index = '+index);
		console.log(record.data);

		//push the unit detail panel onto the AlarmsPanel NavView
		this.getAlarmsPanel().push({
			xtype: 'unitdetail',
			title: record.data.text,
			data: record.data
		});
	}
});

