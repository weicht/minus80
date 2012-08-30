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
	},
        
	onItemTap: function(list, index, target, record, evt, options){
//		console.log('Inside onItemTap of Facilities Controller:: index = '+index);
//		console.log(record.data);

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



/*
	launch: function() {
//            console.log(this);
		var facilitiesStore = Ext.getStore('facilitiesStore');
		console.log('1. facilitiesStore.getCount(): '+facilitiesStore.getCount());

//		facilitiesStore.on({
//			load: 'onFacilitiesLoad',
//			scope: this
//		});
//		facilitiesStore.load();

//facilitiesStore.load({
//    success : function(store) {
//        console.log(store.getCount());
//    }
//});


		{
			success: function(store){
				console.log('store plz: '+store.getCount());
			},
			error: function(){
console.log('error loading store');
			},
			failure: function(){
console.log('failure loading store');
			}
		});

//		console.log('2. facilitiesStore.getCount(): '+facilitiesStore.getCount());
	},

	onFacilitiesLoad: function(store) {
console.log('store plz: '+store.getCount());
console.log('-- Inside onFacilitiesLoad');
		var facilitiesList = this.getFacilitiesList();
		facilitiesList.refresh();
console.log('facilitiesList.getStore().getCount(): '+facilitiesList.getStore().getCount());
console.log(' count the hard way: '+Ext.getStore('facilitiesStore').getCount());
//            facilitiesList.select(0);
	},
*/