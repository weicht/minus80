Ext.define("minus80.view.UnitDetail",{
	extend: 'Ext.Panel',
	xtype: 'unitdetail',
	
	config:{
//need to add the style stuff to the application's .css or index.html file later
//		cls: 'info',
		layout: 'fit',
		style: 'text-align: left;',
		scrollable: true,
		styleHtmlContent: true,
		tpl: new Ext.XTemplate(
			'<tpl for="items">',
				'<div class="title">{text}</div>',
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

