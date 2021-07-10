---
title: 'iptables rules'
date: '2011-04-02T13:34:28+10:00'
status: publish
permalink: /documentation/iptables-rules
author: tim
excerpt: ''
type: page
id: 41
---
Transparent Proxy
-----------------

In older versions of CoovaChilli we used the following firewall rules in ipup.sh for transparent squid proxy

```
# TRANS PROXY
   ipt -I PREROUTING -t nat -p tcp -s 10.1.0.0/24 -d 10.1.0.1 --dport 3128 -j DROP
   ipt -I PREROUTING -t nat -i $IF -p tcp -s 10.1.0.0/24 -d ! 10.1.0.1 --dport 80 -j REDIRECT --to 3128
```

These allowed us to block direct access to the squid proxy (seeing as you needed to add 3128 as an allowed port in the chilli config file) which would bypass authentication, but would transparently redirect website requests to the proxy (which occured after authentication). It just worked. However, a newer version of netfilter (iptables) prevents the DROP target being applied in the nat table, as nat is for nat not filtering. (Also, newer CoovaChilli versions replace $IF with something else).

This has lead to the new rules looking like this.

```
# TRANS PROXY
   ipt -I PREROUTING -t mangle -p tcp -s 10.1.0.0/24 -d 10.1.0.1 --dport 3128 -j DROP
   ipt -I PREROUTING -t nat -i $TUNTAP -p tcp -s 10.1.0.0/24 -d ! 10.1.0.1 --dport 80 -j REDIRECT --to 3128
```

DROP rule needs to be in mangle, not nat. $IF becomes $TUNTAP.

You don’t need to add these rules in to the GRASE Hotspot package as they have already been done, hopefully this will be useful to someone else trying to get transparent proxy working with Coova Chilli.

(To assist search engines. The errors you may encounter with the old rules are as follows.)

*The “nat” table is not intended for filtering, the use of DROP is therefore inhibited.*

*The “nat” table is not intended for filtering, hence the use of DROP is deprecated and will permanently be disabled in the next iptables release.* Please adjust your scripts