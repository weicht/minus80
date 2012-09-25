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
					'<div class="metadata">Confirmed By: {confirmed_by}</div>',
						'<tpl for="items">',
								'<div class="metadata">{text}: {value}</div>',
						'</tpl>',
				'<HR>',
			'</tpl>'),
	}
});

