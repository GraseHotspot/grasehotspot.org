---
title: 'Notice &#8211; Removal of VPN Remote access'
date: '2020-06-06T16:16:44+10:00'
status: publish
permalink: /2020/06/06/notice-removal-of-vpn-remote-access
author: tim
excerpt: ''
type: post
id: 486
category:
    - News
tag:
    - news
post_format: []
vantage_panels_no_legacy:
    - 'true'
siteorigin_page_settings:
    - 'a:6:{s:6:"layout";s:7:"default";s:10:"page_title";b:1;s:15:"masthead_margin";b:1;s:13:"footer_margin";b:1;s:13:"hide_masthead";b:0;s:19:"hide_footer_widgets";b:0;}'
---
For a number of reasons, and the availability of alternative options, we will be discontinuing the remote access VPN service. This means that from June 13th 2020 the `grase-conf-openvpn` package will not be available, and existing installs will no longer connect to the VPN or be accessible remotely.

Please remove the config package by running:

```
<pre class="wp-block-preformatted">sudo apt remove --purge grase-conf-openvpn
```

Alternatives include:

- <https://www.zerotier.com/>
- <https://www.freelan.org/>
- <https://www.softether.org/>

Hopefully, one of these options will give you a better experience and will allow me more time and energy to focus on the core of the GRASE Hotspot instead of support services.