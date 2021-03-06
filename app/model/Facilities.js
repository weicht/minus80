Ext.define('minus80.model.Facilities', {
	extend: 'Ext.data.Model',
	
	config: {
		idProperty: 'id',
	    fields: [
//	    	{name: 'uuid', type: 'string'},
	    	{name: 'id', type: 'string'},
	    	{name: 'facility_id', type: 'string'}, //only exist for facilities
//	    	{name: 'unit_id', type: 'string'}, //only exist for units
//	    	{name: 'device_id', type: 'string'}, //only exist for devices
//	    	{name: 'device_number', type: 'string'}, //only exist for devices
			{name: 'text', type: 'string'},
			{name: 'info', type: 'string'},
			{name: 'type', type: 'string'},
			{name: 'items', type: 'auto'}
		]
	}
});

