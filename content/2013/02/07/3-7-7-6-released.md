---
title: '3.7.7.6 Released'
date: '2013-02-07T12:58:16+10:00'
status: publish
permalink: /2013/02/07/3-7-7-6-released
author: tim
excerpt: ''
type: post
id: 317
category:
    - News
tag:
    - '3.7'
    - 3.7.6
    - 3.7.7
    - grase
    - news
    - release
post_format: []
---
So somehow we missed the 3.7.6 release. And 3.7.7 didn’t make it out of dev as we found some bugs, so here I’ll try and summarise what has changed since 3.7.5!

- **Fixed the 4Gb limit on data limits**. This required a whole new module for Freeradius, and we are very grateful to the [Yfi Hotcakes project](http://sourceforge.net/projects/hotcakes/ "Yfi Hotcakes") as we used a good portion of their code. See [perl\_modules](http://grase.bzr.sourceforge.net/bzr/grase/grase-conf-freeradius/files/head%3A/freeradius/perl_modules/ "Yfi Hotcakes code") for an idea of what code we used.
- Fixed a security hole that could allow a user who knows the right details to login with no limits
- Fixed some display bugs due to usernames being case insensitive
- Fixed bug [\#93](http://trac.grasehotspot.org/ticket/93 "Creation of user data limit fails") (as well as other bugs)
- Added pagination to session monitoring, and by default only show Active sessions ([\#84](http://trac.grasehotspot.org/ticket/84), [\#90](http://trac.grasehotspot.org/ticket/90))
- Removed $ values from Data and Time limits (Vouchers will be in next version so you can sell properly instead of just having a price tied to a Mb/Minute value)
- Allow customisation of Data, Time and Bandwidth options
- Ability to lock and unlock users ([\#77](http://trac.grasehotspot.org/ticket/77 "Lock and Unlock users"))
- Customise DHCP range ([\#85](http://trac.grasehotspot.org/ticket/85 "DHCP Range"))
- Fix bug [\#79](http://trac.grasehotspot.org/ticket/79 "Restart every 5 minutes") which is causing restarts every 5 minutes

Updates should be automatic unless you have disabled automatic updates. Please report all bugs to the [mailing list](https://grasehotspot.org/support/mailing-list/ "Mailing List") or the [bug tracker](https://grasehotspot.org/development/tracker/ "Tracker").