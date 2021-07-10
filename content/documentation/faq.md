---
title: 'FAQ'
date: '2013-12-13T19:06:43-08:00'
status: publish
permalink: /documentation/faq
author: tim
excerpt: ''
type: page
---

## Hardware
### What kind of Wireless AP do I need? 
You need a ​[Wireless Access Point](http://en.wikipedia.org/wiki/Wireless_access_point), not a ​[Wireless Router](http://en.wikipedia.org/wiki/Wireless_router). Some Wireless Routers can act as a Wireless Access point by disabling DHCP, and using the LAN port (not the WAN port) to plugin to the Hotspot server. A Wireless Access Point operates at Layer 2 of the ethernet, and while it may have an ip address itself (to change settings), it doesn't handle DHCP requests or do any routing as such.

## Software
### How do I create vouchers for selling 
There is no difference between users and vouchers. Simply create a group with the settings you want to apply to your vouchers, then use "Batch Users" to create the number of vouchers you want. You can also print from Batch Users.

### How do I turn off Automatic updates 
Edit /etc/cron.daily/grase-repo and put an "exit 0" before the part you want to skip. Usually this will be before the apt-get line, so that the repository details are kept correct. You may need to repeat this after an update to grase-repo is installed. You can still do manual updates with "apt-get update; apt-get upgrade" although sometimes we release new packages that components depend on, and then you may need an "apt-get dist-upgrade" or manually force the install of the package that has been kept behind.

### Quick Start list for Confident System Admins 
Only setup the WAN network interface, do not setup the LAN network interface, it must be left without any settings (no ip, no netmask, etc)
Do not setup a firewall until after everything is running as the Grase Hotspot will setup it's own firewall
Do not setup things like Squid, as the Grase Hotspot packages will handle this

## Proxy

### Why don't I see all websites someone has visited in the session report? (Why don't HTTPS sites show up)
The session report can only provide you with the sites accessed through the transparent proxy. Only HTTP sites pass through the transparent proxy, so only HTTP sites are recorded. HTTPS sites can't be transparently proxied, so they are NATted through the gateway instead.

HTTPS sites could go through a proxy that wasn't transparent, but would then require the user to modify proxy settings on their computer to access the internet. This would still only record the site hostname that was accessed, and not the full URL.

To record the full URL of a HTTPS site, a Man In The Middle proxy would need to be setup, which would either require an illegal SSL signing certificate, or for the user to install a new SSL CA certificate on their computer. Again, this requires the user to modify their computer to access the internet. As the intended use for the Grase Hotspot is WiFi hotspots, we do not wish for users to have to modify their device to use the internet, so will not be implementing either solution.

Why can't we intercept HTTPS connections? Because the Secure part of the connection happens first, where the server the user is connecting to correctly identifies that it is the server we are expecting to connect to. If we try and pretend to be the destination server, we won't have a security certificate that correctly identifies us, that the users computer recognises. (We can generate our own certificate, however the users computer doesn't trust us to make certificates, so the certificate we present will fail verification showing the user a warning). Once the user has connected to the destination server and verified it's identity, it then uses an encrypted connection to continue talking to the destination server, and it's over this encrypted connection that all the details we want to log are sent.

NB: In theory we can sniff those initial packets to get the SNI hostname to at least know which webserver we are trying to connect to. The effort required to do this isn't worth the rewards. Instead, if you require complete monitoring of the internet traffic, you need to look at something that records all IP connections, the ports, and the source and destination IP address. You can then cross check this against your user sessions to identify which user went to which IP. You can't however tell what resources they accessed at that IP address