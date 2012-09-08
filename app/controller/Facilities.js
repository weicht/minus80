Ext.define("minus80.controller.Facilities",{
	extend: 'Ext.app.Controller',
	requires: ['minus80.store.Facilities', 'minus80.store.Settings'],

	config: {
		stores: ['Facilities'],
		refs: {
			facilitiesList: '#facilities-list', //id from the view requires a # prefix
			facilitiesPanel: 'facilitiespanel' //xtype requires no #
		},
		control:{
			facilitiesList: {
				itemtap: 'onItemTap'
			}
		}
	},

   	launch: function(){
		this.callParent();

		//load the Facilities
		Ext.getStore('facilitiesStore').load(function() {
		});
	},
        
	onItemTap: function(list, index, target, record, evt, options){
		//push the unit detail panel onto the FacilitiesPanel NavView
		this.getFacilitiesPanel().push({
			xtype: 'unitdetail',
			title: record.data.text,
			data: record.data
		});
	},
});

