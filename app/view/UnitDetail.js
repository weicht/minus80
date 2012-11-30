Ext.define("minus80.view.UnitDetail",{
	extend: 'Ext.Panel',
	xtype: 'unitdetail',
	
	config:{
		layout: 'fit',
		style: 'text-align: left;',
		scrollable: true,
		styleHtmlContent: true,
		tpl: new Ext.XTemplate(
			'<tpl for="items">',
//				'<div class="{[xindex % 2 === 0 ? "list-item-even" : "list-item-odd"]}">',			
//				'<div class="title">{text}</div>',
		        '<tpl if="alarm_state &gt; 0">',
					'<div class="alarmactive">{text}</div>',
   				'<tpl else>',
	   				'<div class="title">{text}</div>',
				'</tpl>',
				
				//only show the confirmed by setting if the alarm is active and confirmed
		        '<tpl if="alarm_state &gt; 0 && alarm_confirmed != null && alarm_confirmed != 0">',
					'<div class="metadata">Confirmed By: {confirmed_by}</div>',
       			'</tpl>',
				'<tpl for="items">',
					'<div class="metadata">{formatted_value}</div>',
				'</tpl>',
				'<HR>',
			'</tpl>'),
	}
});

