---
title: 'Improving Debian Compatability'
date: '2011-05-27T10:06:59+10:00'
status: publish
permalink: /2011/05/27/improving-debian-compatability
author: tim
excerpt: ''
type: post
id: 113
category:
    - News
tag:
    - bug
    - deb
    - debian
    - packages
post_format: []
---
As my main development box is Ubuntu, it’s hard to know if my packages will run on Debian. Obviously I don’t want to exclude any deb based Distro, but for now I don’t offer any guarantee’s that the packages will run on anything other than my machine. I will however do my best to ensure it does run on both Debian and Ubuntu.

Today I fixed a “bug” preventing it running on Debian Squeeze. Turns out there is a bug in the smarty package (<http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=514305>) which hasn’t been fixed in Squeeze yet. Quite simply, the path for the Smarty class is in a different place on Debian than Ubuntu. Ubuntu “fixed” the path to be inline with upstream Smarty, and didn’t get it fixed in Debian at the same time. The fix is in Debian unstable. So rather than forcing everyone who wants to use the Hotspot on Debian Unstable, I added an if statement on the class including code to check for the Debian path, and load from there, else load from the standard location for Ubuntu. Problem bypassed!

If you are using this package on Debian, please let me know anything that doesn’t work as expected so I can try and have the package working for everyone.

I also pushed another change today, that force’s the grase-conf-squid3 package to conflict with the squid package. Seems you can have both squid 2.7 and squid 3.1 installed at the same time. Unfortunately my config files are for squid3 (and there are reasons for using squid3 over 2.7), and for foolproof operation I need to ensure that squid3 is running. Simplest solution, make sure squid 2.7 is uninstalled. This also ensures the user doesn’t get confused if they are trying to customise any of it. So when you next update, if you have squid 2.7 installed, it will be removed.