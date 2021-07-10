---
title: 'Hardware Setup'
date: '2011-05-20T08:13:14+10:00'
status: publish
permalink: /documentation/hardware-setup
author: tim
excerpt: ''
type: page
id: 103
---
Some people are having problems with the hardware setup, so hopefully this will assist.

[![](../../uploads/2011/11/Hotspot_Hardware_Setup.png "Hotspot_Hardware_Setup")](https://grasehotspot.org/wp-content/uploads/2011/11/Hotspot_Hardware_Setup.png)

First, you need a computer that can run Ubuntu or Debian, 32bit or 64bit. Currently my custom packages aren’t compiled for anything other than standard x86 hardware, but if you wish to compile coovachilli for arm for example, then you’ll be able to run the rest of the software too (hopefully).

The computer needs 2 Network cards at least. One network card needs to be connected and configured for the internet. This might be via DHCP to a ADSL Modem, or static direct to your ISP.  
The other network card needs to be setup with NO configuration. This means no static ip, and no dhcp. If you followed my Ubuntu Server installs, then this is where you should be. However, if you have a GUI installed, you probably have network manager which will attempt DHCP on all network cards when plugged in.

You can ether disable the network card in Network Manager, or prevent Network Manager even touching the card.

To prevent Network Manager touching the card, you need to edit /etc/network/interfaces as root (use sudo under Ubunut) and add the interface as a manually configured card. For example if your network card that the Hotspot is going to run off is eth1, add the following to /etc/network/interfaces

```
iface eth1 inet manual
```

If you are using Network Manager, then you need to “Edit Connections” (depending on the Ubuntu version, this can be done through the System -&gt; Preferences -&gt; Network Connections menu, or by (right) clicking the network icon in the panel and selecting Edit Connections. Find the correct connection (might be something like “Auto eth1” and click edit. Unselect “Connect Automatically”. This should allow Coova Chilli to find and use the correct connection without Network Manager interfering.