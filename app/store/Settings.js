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
				//if the store is empty, then add a dummy account
				if(store.data.length < 1){
					//create the local storage
					store.add({username: 'username', password: 'password'});
					store.sync();
				}

				//if it's still saying "username/password" then provide a popup window
				// telling them to modify their Settings
				if( this.getAt(0).data.username == 'username' &&
					this.getAt(0).data.password == 'password' ){
					Ext.Msg.alert("Settings", "Update your Settings so we may load your data.");
				}
			}
		}
	}
});