Ext.define('minus80.store.Alarms', {
	extend: 'Ext.data.Store',
	//require the Settings store as we set the minus80.app.settings global variable in there
	requires: ['minus80.model.Alarms', 'minus80.store.Settings'],

	config: {
		storeId: 'alarmsStore',
		model: 'minus80.model.Alarms',
		autoLoad: true,
	    proxy: {
			type: 'ajax',
//			url: 'data/alarms.json',
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
//				this.getProxy().setExtraParams(minus80.app.settings);
				this.getProxy().setExtraParams( Ext.getStore('settingsStore').getAt(0).data );
			},
			load: function(store, records, successful) {
				console.log('Alarms loaded: '+records.length);
//TODO: Fix this - Against MVC rules, but this is setting the badge number of Alarms
// Should have an event listener in the Alarms controller to hear when the store is loaded and do this
				Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(records.length);
			}
		}
	}
});

