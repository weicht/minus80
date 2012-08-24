Ext.define('minus80.model.Facilities', {
	extend: 'Ext.data.Model',
	
	config: {
		idProperty: 'id',
	    fields: [
//	    	{name: 'uuid', type: 'string', convert: function(value, record){return record.get('type')+record.get('id')}},
			{name: 'id', type: 'string'},
			{name: 'text', type: 'string'},
			{name: 'info', type: 'string'},
			{name: 'type', type: 'string'},
			{name: 'items', type: 'auto'}
		]
	}
});

