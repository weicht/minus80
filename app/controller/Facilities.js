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
				itemtap: 'onItemTap'
			}
		}
	},

   	launch: function(){
		this.callParent();

		var fl = this.getFacilitiesList();
		//load the Facilities
		Ext.getStore('facilitiesStore').load(function() {
			//if we have only one Facility, then auto expand it
			if(this.getTotalCount() == 1){
				fl.fireEvent('itemtap', fl, 0, null, this.getAt(0));
			}
		});
	},
        
	onItemTap: function(list, index, target, record, evt, options){
		//push the unit detail panel onto the FacilitiesPanel NavView
		this.getFacilitiesPanel().push({
			xtype: 'unitdetail',
			title: record.data.text,
			data: record.data,
		});
	},
});

