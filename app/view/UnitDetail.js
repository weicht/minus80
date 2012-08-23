Ext.define("minus80.view.UnitDetail",{
	extend: 'Ext.Panel',
	xtype: 'unitdetail',
	
	config:{
//		title: 'Alarms - Unit Detail',
		layout: 'fit',
//need to add the style stuff to the application's .css or index.html file later
		cls: 'info',
		
		//make the text look better on mobile sized devices
		scrollable: true,
		styleHtmlContent: true,
		tpl: '{text}<div class="metadata">{info}</div>',

//may want to use this later when we have ACK/IGNORE buttons		
		items: [
			{
				docked: 'bottom',
				xtype: "toolbar",
				layout: {pack: 'center'},
				items: [
					{
						xtype: 'button',
						text: 'ACKNOWLEDGE',
						handler: function(){
							Ext.Msg.alert('NOT YET IMPLEMENTED: ACK');
						}
					}
				]
			}
		]
	}
});