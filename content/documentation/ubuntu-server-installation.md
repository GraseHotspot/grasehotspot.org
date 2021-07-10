---
title: 'Ubuntu Server Installation'
date: '2011-04-02T13:24:49+10:00'
status: publish
permalink: /documentation/ubuntu-server-installation
author: tim
excerpt: ''
type: page
id: 17
---
Ubuntu Server Installation
--------------------------

Step by step instructions for installing Ubuntu Server ready to install the hotspot.

Ubuntu 12.04 (LTS) is tested and currently supported. Debian 6 is also currently supported

1. Boot off the Ubuntu Server CD.
2. Select your language and then select Install Ubuntu Server  
  [![](../../uploads/2011/04/server_0001.png "server_0001")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0001.png)
3. Select your location and keyboard following the prompts
4. Allow the installer to detect your hardware
5. As you have 2 network cards installed, it should ask you which one is the primary one. 
  1. If you know, then select it, otherwise select the first one
  2. It will then attempt DHCP to setup the network card. If it fails then you need to select “Go Back” and try with the next network card.
  3. You need to ensure the network cable is plugged in and the router is working  
      [![](../../uploads/2011/04/server_0002.png "server_0002")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0002.png)  
      [![](../../uploads/2011/04/server_0003.png "server_0003")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0003.png)
6. When it asks for a hostname, choose something descriptive to your location. This hostname is used to identify the system for remote support so something other than hotspot would be good.  
  [![](../../uploads/2011/04/server_0004.png "server_0004")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0004.png)
7. It will then attempt to setup the clock, if it gets the wrong timezone, just select the correct one.
8. Soon it will ask you about partitioning the disk. 
  1. Choose the first option to use guided partitioning and use the entire disk.
  2. The confirm the changes it prompts to write to disk and watch as it formats the drives ready for the new install
9. It will then start installing the base system. On a slower computer, now is a good time to go have a coffee break or something.
10. Enter your name when asked for the new user account. This will be your local account, not the remote assistance account  
  [![](../../uploads/2011/04/server_0005.png "server_0005")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0005.png)
11. Choose a username for yourself  
  [![](../../uploads/2011/04/server_0006.png "server_0006")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0006.png)
12. Choose a secure password  
  [![](../../uploads/2011/04/server_0007.png "server_0007")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0007.png)
  1. Re-enter your password again when prompted
13. Choose not to encrypt your home directory  
  [![](../../uploads/2011/04/server_0008.png "server_0008")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0008.png)
14. It will now setup the APT sources etc
15. Select to automatically install security updates  
  [![](../../uploads/2011/04/server_0009.png "server_0009")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0009.png)
16. When it asks what software you want to install, choose LAMP Server and OpenSSH Server  
  [![](../../uploads/2011/04/server_0010.png "server_0010")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0010.png)
17. At this stage it will probably ask you to set a password for the MySQL root user. Do this and if it’s different from your normal password, remember it as you will need it later
18. Install GRUB to the Master Boot Record  
  [![](../../uploads/2011/04/server_0011.png "server_0011")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0011.png)
19. The install is now finished, eject the CD and reboot
20. You should be presented with a login screen similar to the following  
  [![](../../uploads/2011/04/server_0012.png "server_0012")](https://grasehotspot.org/wp-content/uploads/2011/04/server_0012.png)