---
title: 'Strange Networking Woes'
date: '2011-04-30T16:10:07+10:00'
status: publish
permalink: /2011/04/30/strange-networking-woes
author: tim
excerpt: ''
type: post
id: 88
category:
    - News
tag:
    - issue
    - network
    - squid
post_format: []
---
So today is the first day of [Auscon](http://www.auscongames.com.au). The organisers have choosen to use GRASE Hotspot to manage Internet access at the venue. The machine running the hotspot had been tested at an alternative site successfully, and the interface modified slightly to suit the event. (Which won’t need to be done as much with some new changes in the next version)  
However, the day didn’t look good with the hotspot not functioning properly. Everything BUT WWW (http, port 80) traffic was working. Investigating Squid showed that it was attempting to connect to 1.0.0.0, which most keen observers would notice is a network address not a device address. Strangely enough, squid was trying to connect to 1.0.0.0 via ipv6! It was thinking it was an ipv6 address.

The quick solution was in to install dnsmasq on the hotspot machine, and point it to a public DNS server I know to be working, and restart squid with it using the local dnsmasq instance. Everything is good now.

But is that the real issue? There is an overlapping netmask. Coova Chilli is setup to use 10.0.0.0/24 (so 10.0.0.1-254) for it’s addresses. However, the upstream network interface was setup on a 10.0.0.0/8 which overlaps the Coova Chilli network. It’s very possible that this overlap is causing problems. An example of a squid log message when the problem occurs is below.

`GET http://api.twitter.com/1/direct_messages.xml? - DIRECT/1.0.0.0 text/html`

So maybe if you are pulling your hair out, try changing the upstream network if you can. It could also be the upstream DNS (adsl modem) returning faulty values.

<ins datetime="2011-04-30T22:57:27+00:00">Edit: So on follow up, the overlapping netmasks aren’t the issue. Yes, if there was something on the upstream network that was in the overlap range, then it would be inaccessible to hosts behind the hotspot. However, this issue was caused by the upstream DNS server. I believe it is a dlink running dproxy, which has a bug that causes it to start returning 1.0.0.0 after it gets an ipv6 dns request or something like that. Of course, this then caused squid to try and contact 1.0.0.0 as that was what the DNS had resolved to, which of course leads to a timeout. Forcing the hotspot to use the local dnsmasq with a known good public DNS server fixes the problem as we bypass the faulty DNS proxy upstream.</ins>