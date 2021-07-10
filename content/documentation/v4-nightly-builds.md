---
title: 'V4 Alpha Builds'
date: '2020-07-25T18:11:22+10:00'
status: publish
permalink: /documentation/v4-nightly-builds
author: tim
excerpt: ''
type: page
id: 496
---
These are instructions for the currently V4 nightly builds to get up and running to help test V4.

1. Clean install Ubuntu 18.04 server (please don’t install desktop components unless you know how to disable systemd-resolved and other networking components that get in the way)
  1. During the install, you will need to configure your network cards. Only configure your WAN interface, leave your LAN interface unconfigured.
2. Setup the Grase development APT repository  
  ```shell
  echo deb https://apt.grasehotspot.org/dev bionic main | sudo tee /etc/apt/sources.list.d/grase.list
  ```
3. Add the APT repo key  
  ```shell
  sudo wget https://github.com/GraseHotspot/grase-repo/raw/master/key/grase.hotspot.2020.gpg -O /etc/apt/trusted.gpg.d/grase.hotspot.2020.gpg
  ```
4. Update APT database  
  ```shell
  sudo apt update
  ```
5. Install the required Grase packages. As part of the install there are a few database questions, you can just accept the defaults  
  ```shell
  sudo apt install grase-www-portal
  ```
  
    
  ```shell
  sudo apt install grase-conf-freeradius grase-conf-dnsmasq coova-chilli
  ```
6. Run the first-run wizard, this will ask questions to setup the network, and the admin password  
  ```shell
  sudo -u www-data /usr/share/grase/symfony4/bin/console grase:first-run
  ```
7. Reboot
8. The Grase system should now be up and running, you should be able to access the admin interface from either the LAN or WAN interface, by going to `http://<IP ADDRESS>/grase` (replacing `<IP ADDRESS>` with the correct ip address for the LAN/WAN interface). Username is admin and you set the password in the first run wizard.

V3 to V4 Migration
------------------

If you wish to test the migration from V3, you need to get your latest database backups (located in `/var/backups/grase`) there will be a mysql\_radius backup and a mysql\_radmin backup file. You can then use the following command to load the V3 backup into your V4 server. This will delete the entire database on the server, load the V3 database, migrate into the V4 structure. You will then need to run the first-run wizard from above again.

```shell
sudo -u www-data /usr/share/grase/symfony4/bin/console grase:migrate-v3-backup mysql_radius_backup.sql mysql_radmin_backup.sql
```