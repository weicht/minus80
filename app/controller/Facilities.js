Ext.define("minus80.controller.Facilities",{
	extend: 'Ext.app.Controller',
	requires: ['minus80.store.Facilities'],

	config: {
		stores: ['Facilities'],
		refs: {
			facilitiesList: '#facilities-list', //id from the view requires a # prefix
			facilitiesPanel: 'facilitiespanel' //xtype requires no #
		},
		control:{
			facilitiesList: {
//				leafitemtap: 'onUnitTap'
//				disclose: 'onDisclose',
				itemtap: 'onItemTap'
			}
		}
	},
	
	launch: function(){
		this.callParent();
	},

	onItemTap: function(list, index, target, record, evt, options){
		console.log('Inside onItemTap of Facilities Controller:: index = '+index);
		console.log(record.data);

		//push the unit detail panel onto the FacilitiesPanel NavView
		this.getFacilitiesPanel().push({
			xtype: 'unitdetail',
			title: record.data.text,
			data: record.data
		});
	},

/*
	onUnitTap: function(thisNestedList, list, index, target, record){
		console.log('Inside onUnitTap()');
		console.log(record.data);

		//update the detailCard with dynamic data for this Unit
		var unitData = ''+record.get('text');
		for(var i = 0; i < record.get('items').length; i++){
			var item = record.get('items')[i];
			unitData += '<div class="metadata">'+item.text+': '+item.value+'</div>';
		}
		this.getFacilitiesList().getDetailCard().setHtml(unitData);
	}
*/
});

