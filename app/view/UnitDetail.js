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
//		tpl: '{text}<div class="metadata">{info}<div class="metadata">{items.length} units to show below...</div>',
//		tpl: new Ext.XTemplate('{text}<div class="metadata">{info}<div class="metadata">{items.length} units to show below...</div>'),

		tpl: new Ext.XTemplate(
            '<tpl for="items">',
                '<div class="metadata">',
                    '<div class="name">{[xindex]} {text}</div>',
                '</div>',
            '</tpl>'),

/*
            '<tpl for="items">',
                '{% if(xindex % this.getPerRow() == 1) {%}',
                    '<div class="person_rows">',
                '{% } %}',

                '<div class="person">',
                    '<div class="name">{[xindex]}{name}</div>',
                    '<div class="age">{age}{[xindex % this.getPerRow() == 1]}</div>',
                '</div>',

                '{% if(xindex % this.getPerRow() == 0 || xindex == xcount){ %}',
                    '</div>',
                '{% } %}',
            '</tpl>',
*/
/*
   	        	getItemTextTpl: function(){
					var tplConstructor = '{text}' +
					'<tpl if="type === \'facility\'">'+
							'<div class="metadata">{[values.items.length]} units</div>' +
					'</tpl>' +
					'<tpl if="type === \'unit\'">'+
							'<div class="metadata">{[values.items.length]} devices</div>' +
					'</tpl>';
					return tplConstructor;
				},
*/


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