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

		tpl: new Ext.XTemplate(
			'<tpl if="type === \'facility\'">',
					'<div class="metadata">{[values.items.length]} units</div><HR>',
					'<tpl for="items">',
						'<div class="metadata">',
							'<div class="name">Unit #{[xindex]} {text}</div>',
						'</div>',
					'</tpl>',
			'</tpl>',
			'<tpl if="type === \'unit\'">',
					'<div class="metadata">{[values.items.length]} devices</div><HR>',
					'<tpl for="items">',
						'<div class="metadata">',
							'<div class="name">Device #{[xindex]} {text}</div>',
						'</div>',
					'</tpl>',
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
	}
});