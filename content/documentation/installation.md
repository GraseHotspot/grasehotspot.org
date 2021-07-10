---
title: Installation
date: '2011-04-02T12:50:18+10:00'
status: publish
permalink: /documentation/installation
author: tim
excerpt: ''
type: page
id: 9
---
Basic install instructions
--------------------------

*if you are interested in using the bleeding edge version as it’s developed, see [ nightly builds for more information](https://grasehotspot.org/documentation/nightly-builds/ "Nightly Builds")*

Install Ubuntu Server to computer (the guide is for an older version of Ubuntu, new installs should be on at least 14.04 or Debian 7. The installation guide is still somewhat useful as a guide). [UbuntuServerInstallation](https://grasehotspot.org/documentation/ubuntu-server-installation/ "Ubuntu Server Installation") (Ubuntu 14.04 (LTS) is tested and currently supported. Debian 7 is also currently supported)

If you didn’t follow the Ubuntu Server install instructions, or have installed a GUI, please check the [Hardware Setup](https://grasehotspot.org/documentation/hardware-setup/ "Hardware Setup") page for some important information about the network card setup.

When it boots you will be presented with a prompt. Login with the username and password you set. Download latest grase-repo package from <http://packages.grasehotspot.org/pool/main/g/grase-repo/>  
e.g. (Update to point to the latest grase-repo package at the above link)

```
<pre class="prettyprint">$ wget http://packages.grasehotspot.org/pool/main/g/grase-repo/grase-repo_1.7_all.deb
```

install the package

```
<pre class="prettyprint">$ sudo dpkg -i grase-repo_1.7_all.deb
```

Update the repository

```
<pre class="prettyprint">$ sudo apt-get update
```

Then install the components. Currently for a full system, the following command should suffice

```
<pre class="prettyprint">$ sudo apt-get install grase-www-portal grase-conf-freeradius
```

This will proceed to download all the dependencies as well and install them. It will ask a few questions which are needed to finish setting it up. See the below sections for answering these questions

If you have issues installing coova-chilli, see <http://support.rstudio.org/help/kb/advanced/installing-openssl-098-on-debian-7-wheezy> for more information on installing libssl0.9.8

### Configuring grase-conf-freeradius

Attempting to setup the database manually is possible but should not be attempted without good reason.

1. When it asks you if you want to use dbconfig-common to manage it, please answer yes.
2. You will then need to enter the MySQL root users password which was set during the Ubuntu Server install. If you didn’t select LAMP when installing Ubuntu Server, before you get to this question it will install MySQL and ask you to set a password.
3. It will then ask you for and “MySQL application password for *grase-conf-freeradius*. You can leave this blank and a random password will be created. If you are going to want/need to poke around in the user database userself with SQL commands, then set this password to something you know.

### Configuring grase-www-portal

See the above section for grase-conf-freeradius, all of that applies for this, it’s just for the database for the web interface (mostly admin users and logs)

Install finished
----------------

This should have installed the base system, and submit the systems key to a central server for remote admin. (But not the remote admin user setup, that will have to come later at this stage).

You should now be able to access the web interface at <http://10.1.0.1/grase/radmin> (from the LAN side). The LAN side is the network interface you are running your WiFi Access Point off.  
Default username is ***admin*** and password is ***hotspotadmin***

<span style="text-decoration: underline;">*<span style="color: #ff0000;">**Please post support requests to the [mailing list](https://grasehotspot.org/support/mailing-list/ "Mailing List"), and not as comments below. This way the whole community can assist with answering your questions.  
Comments are CLOSED!** </span>*</span>
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------