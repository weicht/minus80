Ext.define('minus80.model.Settings', {
	extend: 'Ext.data.Model',
	requires: 'Ext.data.identifier.Uuid',
	
	config: {
		identifier: {
			type: 'uuid'
		},
	    fields: [
	             {name: 'id', type: 'int'},
	             {name: 'username', type: 'string'},
	             {name: 'password', type: 'string'}
		]
	}
});