Ext.define('minus80.store.Alarms', {
	extend: 'Ext.data.Store',
	
	config: {
		storeId: 'alarmsStore',
		model: 'minus80.model.Alarms',
		autoLoad: true,
	    proxy: {
			type: 'ajax',
			url: 'data/alarms.json',
			extraParams:{
				username: 'needUnameFromSettings',
				password: 'needPWordFromSettings'
			},
			reader: {
				type: 'json',
				rootProperty: 'items',
				totalCount: 'total'
			}
	    },

		listeners: {
			load: function(store, records, successful) {
				console.log('Alarms loaded: '+records.length);
//TODO: Fix this - Against MVC rules, but this is setting the badge number of Alarms
				Ext.getCmp('mainTab').getTabBar().getComponent(1).setBadgeText(records.length);
			}
		}
	}
});

