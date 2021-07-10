---
title: 'New Login Coming Soon'
date: '2014-05-20T20:58:04+10:00'
status: publish
permalink: /2014/05/20/new-login-coming-soon
author: tim
excerpt: ''
type: post
id: 373
category:
    - News
tag:
    - development
    - grase
    - login
    - news
post_format: []
---
Some I’ve been working on totally rebuilding the login page. The focus has been on Mobile First. See [http://en.wikipedia.org/wiki/Responsive\_web\_design#Mobile\_first.2C\_unobtrusive\_JavaScript.2C\_and\_progressive\_enhancement](http://en.wikipedia.org/wiki/Responsive_web_design#Mobile_first.2C_unobtrusive_JavaScript.2C_and_progressive_enhancement) and <http://designshack.net/articles/css/mobilefirst/> for some information about Mobile First.

Instead of the “Mobile” login page I started developing awhile ago, that we planned on redirecting users to on mobile devices, we will now have a login page that works well in mobile devices, and still looks good on a desktop browser. I’ve also ripped out the old Javascript login code that was still mostly the Coova Chilli example code, and used jQuery to write simplier, cleaner code. This should remove most of the issues that mobile logins have previously had, both with javascript and with the design.

Below are 2 screenshots of the current work in progress, showing what it looks like in a mobile browser, and what it looks like in a fullscreen browser.

Please direct feedback to the [mailing list.](https://grasehotspot.org/support/mailing-list/ "Mailing List")

[![Demo Wireless Hotspot   Login (1)](../../../../uploads/2014/05/Demo-Wireless-Hotspot-Login-1.png)](https://grasehotspot.org/wp-content/uploads/2014/05/Demo-Wireless-Hotspot-Login-1.png)

[![Demo Wireless Hotspot   Login](../../../../uploads/2014/05/Demo-Wireless-Hotspot-Login.png)](https://grasehotspot.org/wp-content/uploads/2014/05/Demo-Wireless-Hotspot-Login.png)