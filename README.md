minus80
=======

Minus80 Monitoring is a solution targeted for labs that have a specific need of monitoring freezers, refrigerators, etc.  On-site device are installed to keep tabs of things like "door ajar", "temperature > 100F", "freezer tilting", etc.  These devices send status signals to a central NOC where data is filtered an acted upon.

On the NOC's main website, Customers designate a hierarchical breakdown of:
- Facility  (ie. Kramer Chemistry Campus)
   - Lab  (ie. Brain Research Lab)
     - Unit  (ie. Subzero Freezer)
       - Devices  (ie. TemperatureSetting)

They also set ranges/values for what is tolerable and what is not.  Alerts are configured to be sent out based on these settings

To support the monitoring capability, I created a mobile application using Sencha Touch hosted as a webapp.  This approach was chosen for:
- it's cross-platform support
- ease of deployment (or lack thereof since it does not involve Apple or Android Stores)
- easily understood MVC framework
- use of already understood protocols (html, css)

The mobile app allows Customers to filter through their hierarchy of monitored devices, see active settings for devices, and view any existing alarms. 

Since deployment, it has been used by numerous companies and universities, and featured in a nationally recognized magazine:

- http://minus80monitoring.com/case-studies
- http://www.labmanager.com/how-it-works/2013/03/temperature-monitoring#.U4fLPpRdWSc
- http://www.labmanager.com/how-it-works/2014/03/how-it-works-wireless-remote-temperature-monitoring#.U4fLhpRdWSc

