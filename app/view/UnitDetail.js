Ext.define("minus80.view.UnitDetail",{
	extend: 'Ext.Panel',
	xtype: 'unitdetail',
	
	config:{
//need to add the style stuff to the application's .css or index.html file later
		cls: 'info',
		layout: 'fit',
		style: 'text-align: left;',
		scrollable: true,
		styleHtmlContent: true,
		tpl: new Ext.XTemplate(
			'<tpl for="items">',
				'{text}',
					'<div class="metadata">Confirmed By: {confirmed_by}</div>',
						'<tpl for="items">',
								'<div class="metadata">{text}: {value}</div>',
						'</tpl>',
				'<HR>',
			'</tpl>'),
	}
});



/*
//may want to use this later when we have ACK/IGNORE buttons		
		items: [
			{
				docked: 'bottom',
				xtype: "toolbar",
				layout: {pack: 'center'},
				items: [
					{
						xtype: 'button',
						text: 'CONFIRM',
						handler: function(){
							Ext.Msg.alert('NOT YET IMPLEMENTED: ACK');
						}
					}
				]
			}
		]
*/
