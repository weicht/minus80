Ext.define('minus80.store.Settings', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage'],
	
	config: {
		storeId: 'settingsStore',
		model: 'minus80.model.Settings',
		autoLoad: true,
	    proxy: {
	        type: 'localstorage',
	        id  : 'minus80'
	    },

		listeners: {
			load: function(store, records, successful) {
			console.log('Settings loaded');
//console.log(' un: '+store.getAt(0).data.username);
				//if the store is empty, then add a dummy account
				if(store.data.length < 1){
					//create the local storage
					store.add({username: 'username', password: 'password'});
					store.sync();
				}
//console.log('  -- un: '+this.getAt(0).data.username);

				//UGLY:  Set the global variable for easy access.
//				minus80.app.settings = this.getAt(0).data;
//console.log('  just set the global username: '+minus80.app.settings.username+ '// password: '+minus80.app.settings.password);
			}
		}
	}
});