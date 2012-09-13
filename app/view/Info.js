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
				    	<BR>web: <a href="http://www.minus80monitoring.com">www.minus80monitoring.com</a> \
						<BR>Sales: <a href="mailto:sales@minus80monitoring.com">sales@minus80monitoring.com</a> \
						<BR>Support: <a href="mailto:support@minus80monitoring.com">support@minus80monitoring.com</a> \
						<BR>General: <a href="mailto:info@minus80monitoring.com">info@minus80monitoring.com</a> \
				    	<BR><BR><div class="metadata">Build Date: 13 Sep 2012 11:10am EST</div>'
						].join("")			
			}
		]
	}
});



/*
				    	<BR>Phone: <a href="tel:+18885551212">(800) 555-1212</a> \
*/