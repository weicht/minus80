Ext.define('minus80.store.Facilities', {
	extend: 'Ext.data.TreeStore',
	requires: ['minus80.model.Facilities'],
	
	config: {
		storeId: 'facilitiesStore',
		model: 'minus80.model.Facilities',
		autoLoad: true,
//		rootProperty: 'items',

	    proxy: {
			type: 'ajax',
			url: 'data/facilities.json',
			extraParams:{
//				username: 'needUnameFromSettings',
//				password: 'needPWordFromSettings'
			},
			reader: {
				type: 'json',
				rootProperty: 'items',
				totalCount: 'total'
			}
	    },

		listeners: {
			load: function(store, records, successful) {
				console.log('Facilities loaded: '+records.length);
			}
		}
	}
});

