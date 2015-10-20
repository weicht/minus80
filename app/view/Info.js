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
				 html: ['<BR><div class="infotitle">Minus 80 Monitoring</div> \
				 		<div class="copy">Copyright &copy; 2012. All Rights Reserved.</div> \
				    	<BR>Web: <a href="http://www.minus80monitoring.com">www.minus80monitoring.com</a> \
						<BR>Sales: <a href="mailto:sales@minus80monitoring.com">sales@minus80monitoring.com</a> \
						<BR>Support: <a href="mailto:support@minus80monitoring.com">support@minus80monitoring.com</a> \
						<BR>General: <a href="mailto:info@minus80monitoring.com">info@minus80monitoring.com</a> \
				    	<BR><BR><div class="buildinfo">Build Date: 20 Oct 2015 01:50pm EST</div>'
						].join("")			
			}
		]
	}
});

