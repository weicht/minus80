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
			},
			{
				xtype: 'settingspanel'
			},
			{
				xtype: 'infopanel'
			}
        ]
    },
});
