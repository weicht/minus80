Ext.define('minus80.store.Facilities', {
	extend: 'Ext.data.Store',
	//require the Settings store as we set the minus80.app.settings global variable in there
	requires: ['minus80.model.Facilities', 'minus80.store.Settings'],
	
	config: {
		storeId: 'facilitiesStore',
		model: 'minus80.model.Facilities',
	    proxy: {
			type: 'ajax',
			url: '/user/get_facilities.php',
			extraParams: {username: 'junk', password: 'junk'}, //not used at this point, but needs to be declared here
			reader: {
				type: 'json',
				rootProperty: 'items',
				totalCount: 'total'
			}
	    },

		listeners: {
			beforeload: function(){
				this.getProxy().setExtraParams( Ext.getStore('settingsStore').getAt(0).data );
			},
			load: function(store, records, successful) {
				console.log('Facilities loaded: '+records.length);
			}
		}
	}
});

