---
title: 'Version 3.6 Released'
date: '2011-10-10T19:10:37+10:00'
status: publish
permalink: /2011/10/10/version-3-6-released
author: tim
excerpt: ''
type: post
id: 186
category:
    - News
tag:
    - coovachilli
    - dnsmasq
    - grase
    - portal
    - release
post_format: []
---
Version 3.6 was released today. This release is just focussed on network settings. You can now change the server lan ip address, and network, as well as set your own DNS servers (or use OpenDNS with Family Shield).  
Please take note, that for these changes we now have dnsmasq installed, which all the clients will use as the DNS server, and dnsmasq will do the queries to the servers you set. It WILL NOT use the dns servers from DHCP or /etc/resolv.conf, you will need to set the dns servers manually or it will default to OpenDNS Family Shield.

As part of this update, the coova-chilli package has been update, as have the grase-conf-squid3, grase-conf-freeradius, and we have a new package called grase-conf-dnsmasq that does the network settings for coova chilli and dnsmasq.

For anyone who has manually modified the coova chilli files (/etc/chilli/config) this will again overwrite your changes, but that’s ok as now you can make all the changes in the admin interface and they won’t be overwritten again! If there are any network settings in /etc/chilli/config that aren’t currently available that you need, just open a bug report and it’ll be added fairly easily.

Standard upgrade is “sudo apt-get update; sudo apt-get upgrade”