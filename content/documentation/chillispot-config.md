---
title: 'ChilliSpot Config'
date: '2011-04-02T13:32:04+10:00'
status: publish
permalink: /documentation/chillispot-config
author: tim
excerpt: ''
type: page
id: 38
---
Getting Configuration from RADIUS Server
========================================

One of the lesser used features of Coova Chilli (ChilliSpot) seems to be the radconfig stuff. This allows you to store settings in the RADIUS database instead of in the config files. You can even change settings while the server is running, and they will be reloaded roughly every hour (I believe). Documentation for this is rather sparse however.

The “refresh” is controlled by the “interval” option. There is no way to set this option in the /etc/chilli/config file as the functions file that processes this into valid config files doesn’t have any interval option. You could modify the init script to pass it as a command line option, or edit /etc/chilli.conf. The best solution, since you are already passing back Administrative Session options, is to pass it back as one of those options. Some digging through the code reveals the default interval is set to 1 hour (3600 seconds), you can see below how to pass through an interval of 10 minutes for more frequent config checks.

Firstly, you need an Administrator user in your radcheck tables. For example, we’ll use *radmin* as our admin user with the password *foobar*.

Our radcheck table will look something like the following

| Username | Attribute    | OP  | Value               |
| -------- | ------------ | --- | ------------------- |
| radmin   | Password     | :=  | foobar              |
| radmin   | Service-Type | \== | Administrative-User |

Our radreply table can now contain attributes that will configure the hotspot. It might look something like this.


| Username | Attribute         | OP | Value                     |
| -------- | ----------------- | -- | ------------------------- |
| radmin   | ChilliSpot-Config | += | macpasswd=apples          |
| radmin   | ChilliSpot-Config | += | uamallowed=mysite.com     |
| radmin   | ChilliSpot-Config | += | uamallowed=sistersite.com |
| radmin   | ChilliSpot-Config | += | interval=600              |