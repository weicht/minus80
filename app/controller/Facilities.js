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
//console.log('fl --');
//console.log(fl);
		//load the Facilities
		Ext.getStore('facilitiesStore').load(function() {
console.log('Facilities count: '+this.getTotalCount());
			//if we have only one Facility, then auto expand it
			if(this.getTotalCount() == 1){
				Ext.Msg.alert("Auto Expand", "Auto Expanding Facility since there is only one");

//facilitiesList.setActiveItem(1);

    var node = this.getAt(0);
console.log(node);
//fl.gotToNode(node);
//fl.goToLeaf(node);
//fl.setActiveItem(0);
fl.fireEvent('itemtap', fl, 0, null, this.getAt(0));
/*
        me.fireEvent('itemtap', this, list, index, target, record, e);
        if (node.isLeaf()) {
            me.fireEvent('leafitemtap', this, list, index, target, record, e);
            me.goToLeaf(node);
        }
        else {
            this.goToNode(node);
*/


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

