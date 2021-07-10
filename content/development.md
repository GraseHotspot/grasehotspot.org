---
title: Development
date: '2011-06-21T13:19:12+10:00'
status: publish
permalink: /development
author: tim
excerpt: ''
type: page
id: 132
---
All source code is stored in a Git repository at Github. See <https://github.com/GraseHotspot> for a list of repositories. If you are thinking of assisting with development please subscribe to our [mailing list](https://grasehotspot.org/mailing-list/ "Mailing List") so we can keep track of what is being worked on by whom. All bug and feature requests can be put in the issue tracker on Github. The GRASE Hotspot is coded in PHP, and uses MDB2 for database abstraction. Coova Chilli is programmed in C and we apply a [few small patches](https://grasehotspot.org/documentation/coova-chilli-patches/ "Coova Chilli Patches") to make it suitable for our use. We intend to develop more features for Coova Chilli to do with allowing uamdomains to be accessed without it counting against your traffic quota. When these patches are suitably coded and clean, we’ll request for them to be merged into Coova Chilli. Other than the Admin interface and captive portal pages, the rest of the easiness of GRASE Hotspot comes from the beautiful Debian Packaging system, that allows us to install each component simply, without having to worry about our changes being overridden. Each piece of software we use, has an “override” config package installed by GRASE Hotspot, which uses a variety of methods to modify the config files to suit our usage. Where possible we leave the packages normal config files inplace, and direct the software to use our config file (grase-conf-squid3) however some packages this isn’t possible and we do a dpkg-redirection so we can install our own config files.