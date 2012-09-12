Ext.define("minus80.view.Info",{
	extend: 'Ext.Panel',
	xtype: 'infopanel',
	
	config:{
		title: 'Info',
		iconCls: 'info',
		layout: 'fit',
//need to add the style stuff to the application's .css or index.html file later
		cls: 'info',
		
		//make the text look better on mobile sized devices
		scrollable: true,
		styleHtmlContent: true,
		
		items: [
			{
				docked: 'top',
				xtype: "toolbar",
			    title: "Info"
			},{
				 html: ['<BR>Minus80<BR>&copy; 2012 Minus80 Inc, All Rights Reserved \
				    	<BR>w: <a href="http://www.minus80monitoring.com">www.minus80monitoring.com</a> \
						<BR>e: <a href="mailto:support@minus80monitoring.com">support@minus80monitoring.com</a> \
				    	<BR>p: <a href="tel:+18885551212">(800) 555-1212</a> \
				    	<BR><BR><div class="metadata">Version: 0.5.0b \
				    	<BR>Build Date: 12 Sep 2012 11:11am</div>'
						].join("")			
			}
		]
	}
});