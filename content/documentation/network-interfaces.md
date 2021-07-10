---
title: 'Network Interface Setup'
date: '2015-06-11T19:28:32+10:00'
status: publish
permalink: /documentation/network-interfaces
author: tim
excerpt: ''
type: page
---


Firstly, Network Manager can be made to work, but can cause issues. It's recommended you manually setup your network interfaces, by editing the /etc/network/interfaces file. This will tell Network Manager to leave those interfaces alone.

The key to setting it up correctly, is to have your WAN interface (the one that connects to the internet) setup with either DHCP or static (as required by your network), and your LAN interface, setup as manual, so that Coova Chilli can capture all traffic on it forcing it through the captive portal.

For example, an /etc/network/interfaces for WAN (eth0) on DHCP, and a Wireless NIC (wlan0) as the LAN
```
# The loopback network interface
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp

auto wlan0
iface wlan0 inet manual

```

For example, an /etc/network/interfaces for WAN (eth0) on static, and a wired NIC (eth1) as the LAN
```
# The loopback network interface
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.1.10
    netmask 255.255.255.0
    gateway 192.168.1.1

auto eth1
iface eth1 inet manual

```

## Disabling Network Manager dnsmasq
You may also find you need to disable Network Managers dnsmasq daemon. Run the following commands (with sudo, or as root) to disable it.
```bash
sed -i -e 's/dns=dnsmasq/#dns=dnsmasq/' /etc/NetworkManager/NetworkManager.conf
restart network-manager
```

This may not be enough, you may also need to run
```bash
sed -i -e 's/bind-interfaces/#bind-interfaces/' /etc/dnsmasq.d/network-manager
```
Then reboot
