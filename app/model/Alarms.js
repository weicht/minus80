Ext.define('minus80.model.Alarms', {
	extend: 'Ext.data.Model',
	
	config: {
	    fields: [
			{name: 'id', type: 'string'},
			{name: 'text', type: 'string'},
			{name: 'info', type: 'string'},
			{name: 'type', type: 'string'},
			{name: 'items', type: 'auto'}
		]
	}
});
