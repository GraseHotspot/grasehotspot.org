---
title: 'Coova Chilli Patches'
date: '2011-04-02T13:43:25+10:00'
status: publish
permalink: /documentation/coova-chilli-patches
author: tim
excerpt: ''
type: page
id: 50
---
Differences between Vanilla Coova Chilli and GRASE Coova Chilli
---------------------------------------------------------------

I only apply a few patches to coova chilli for packaging with the GRASE Hotspot.

The changes are:

- Don’t count traffic to and from the Coova Chilli machine on port 80 (so a local mirror won’t be counted against the users quota)
- Firewall rules to transparently direct all web traffic through the proxy (and eventually dansguardian filtering)
- A config file that auto selects HS\_LAN interface [(See Coova Chilli Network Interfaces)](https://grasehotspot.org/documentation/coova-chilli-network-interfaces/ "Coova Chilli Network Interfaces")
- Some changes to the Chilli Controller JS files for getting more information in the AJAX requests

### Don’t count traffic

Patch against 1.2.6

```
<pre class="dontquote prettyprint">Index: grase-coova-chilli/src/chilli.c
===================================================================
--- grase-coova-chilli.orig/src/chilli.c        2010-12-06 13:20:52.878112452 +1000
+++ grase-coova-chilli/src/chilli.c     2010-12-06 13:24:30.489110146 +1000
@@ -2014,9 +2014,11 @@
   }

   /* If the ip src is uamlisten and psrc is uamport we won't call leaky_bucket */
+  /*    * (And if the packets are destined for the local webserver on port 80) */
   if ( ! (ipph->saddr  == _options.uamlisten.s_addr &&
          (ipph->sport == htons(_options.uamport) ||
-          ipph->sport == htons(_options.uamuiport)))) {
+          ipph->sport == htons(_options.uamuiport) ||
+          ipph->sport == htons(80) ))) {
     if (appconn->s_state.authenticated == 1) {
       if (chilli_acct_tosub(appconn, len))
        return 0;
@@ -4029,10 +4031,12 @@
   /*
    * If the ip dst is uamlisten and pdst is uamport we won't call leaky_bucket,
    * and we always send these packets through to the tun/tap interface (index 0)
+   * (And if the packets are destined for the local webserver on port 80)
    */
   if (ipph->daddr  == _options.uamlisten.s_addr &&
       (ipph->dport == htons(_options.uamport) ||
-       ipph->dport == htons(_options.uamuiport)))
+       ipph->dport == htons(_options.uamuiport) ||
+       ipph->dport == htons(80) ))
     return tun_encaps(tun, pack, len, 0);

   if (appconn->s_state.authenticated == 1) {
```