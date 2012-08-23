Ext.define("minus80.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [ ],
    id: 'mainTab',
    
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'facilitiespanel'
			},
			{
				xtype: 'alarmspanel',
				id: 'alarmsButton'
			},
			{
				xtype: 'settingspanel'
			},
			{
				xtype: 'infopanel'
			}
        ]
    },
    
//    initialize: function(){
//console.log('Inside initialze of main.js - need to auto select first Facil if only 1');
//    }
});
