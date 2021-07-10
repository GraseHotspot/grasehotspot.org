---
title: Packages
date: '2011-04-02T13:30:49+10:00'
status: publish
permalink: /documentation/packages
author: tim
excerpt: ''
type: page
id: 36
---
Packages
========

All the components of the GRASE Hotspot are packaged into debian packages. (.deb). They reside in a repository that allows for easy installation and upgrading.

To easily install the repository, download the latest grase-repo package from <http://packages.grasehotspot.org/pool/main/g/grase-repo/> and install it with `dpkg -i grase-repo\_X\_all.deb` (X represents the latest version).

You can then install the components that you require. Please see the[ installation page for a basic installation](/documentation/installation/ "Installation"). This page is intended to give you a better idea of what the packages contain.

If you are using the Hotspot, please contact me using the contact form at [https://grasehotspot.org/contact/](/contact/)

Package Descriptions
--------------------

### grase-www-portal

This package contains the web interface to the whole system. It contains the UAM pages (login pages) as well as the Radmin pages (Administration section) and the My Account pages (for users to view session history and change password).

### coova-chilli

This package will have grase in the version string. This shows it is the coova-chilli package (from [Coova](http://coova.org/)) with patches relevant to the GRASE Hotspot project. Hopefully in the future most of these patches will be merged reducing the need to rely on a customised build. The main patch in use atm is to not count traffic to the Hotspot server webserver (which is local traffic to the client) so that the local mirror isn’t counted against the users traffic quota.

### grase-conf-freeradius

This package simply provides config files for freeradius already setup for the GRASE Hotspot. It uses mostly diversions instead of modifying files in other packages.

### grase-repo

This package simply provides the GPG keys for the Apt repository, and installs a cronjob to ensure updates are applied nightly and the apt repository source isn’t disabled during upgrades.

### <del>grase-conf-openvpn Deprecated</del>  

### grase-conf-squid3

This package provides config files for Squid3 for the transparent proxy and monitoring of user activity. It is required as the customised coova-chilli package has firewall rules redirecting users browsing traffic through the squid proxy. Without the proxy (and firewall rules) the session monitoring in the Admin interface will only show total traffic, and not a breakdown by url.

### grase-remote-assist-user

This package is only for users getting full support from [White IT Solutions](http://whiteitsolutions.com.au/hotspot/ "White IT Solutions"). Please do not install it unless you have a support contract with [White IT Solutions](http://whiteitsolutions.com.au/hotspot/ "White IT Solutions")