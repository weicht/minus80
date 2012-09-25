Ext.define('minus80.store.Alarms', {
	extend: 'Ext.data.Store',
	//require the Settings store as we set the minus80.app.settings global variable in there
	requires: ['minus80.model.Alarms', 'minus80.store.Settings'],

	config: {
		storeId: 'alarmsStore',
		model: 'minus80.model.Alarms',
	    proxy: {
			type: 'ajax',
			url: '/user/get_alarms.php',
			extraParams: {username: 'junk', password: 'junk'},//not used but needs to be declared
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
				console.log('Alarms loaded: '+records.length);
			}
		}
	}
});

