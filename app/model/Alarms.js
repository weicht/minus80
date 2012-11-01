Ext.define('minus80.model.Alarms', {
	extend: 'Ext.data.Model',
	
	config: {
		idProperty: 'id',
	    fields: [
	    	{name: 'id', type: 'string'},
	    	{name: 'unit_id', type: 'string'}, //only exist for units
//	    	{name: 'device_id', type: 'string'}, //only exist for devices
//	    	{name: 'device_number', type: 'string'}, //only exist for devices
			{name: 'alarm_state', type: 'string'},
			{name: 'alarm_confirmed', type: 'string'},
			{name: 'confirmed_by', type: 'string'},
			{name: 'text', type: 'string'},
			{name: 'info', type: 'string'},
			{name: 'type', type: 'string'},
			{name: 'items', type: 'auto'}
		]
	}
});
