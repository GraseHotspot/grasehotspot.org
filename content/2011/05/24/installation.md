---
title: Installation
date: '2011-05-24T09:11:17+10:00'
status: publish
permalink: /2011/05/24/installation
author: tim
excerpt: ''
type: post
id: 110
category:
    - News
tag: []
post_format: []
---
While it is possible to install this from the source code (bzr), it’s not designed to be installed that way and will give you lots of trouble.  
The reason it is package in .deb files is so that certain dependencies are met, and the configurations for all the pieces of required software is automatic.  
Please read the [installation instructions](https://grasehotspot.org/documentation/installation/ "Installation") before installing.

Attempting to install from the source will not be supported unless you are building debian packages from the source and installing those. Without the debian packages, crucial steps will be missed.

If you wish to assist with porting it to another packaging system, please contact me and we can see if it satisfies the dependency resolution requirements as well as the setup steps.