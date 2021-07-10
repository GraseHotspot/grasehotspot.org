---
title: 'Preliminary Support for Localisation and Translations'
date: '2011-04-30T13:19:24+10:00'
status: publish
permalink: /2011/04/30/preliminary-support-for-localisation-and-translations
author: tim
excerpt: ''
type: post
id: 3
category:
    - News
tag:
    - config
    - translations
post_format: []
---
Preliminary support has been added for translations and localisation. Using php-gettext (the php version, not the module) so that the locales don’t need to be installed on the system hosting it, and using php-intl, we now can support numbers and currencies formatted correctly, as well as translations.  
I’m hoping that the Strings are “semi frozen” for now, so feel free to pull the .po files from bzr (http://sourceforge.net/projects/grase/develop) and start translating!  
I’ll add the code shortly to select the current language and locale.

Also coming soon are the much awaited “Chilli Config” pages, where you can tweak the config that CoovaChilli runs off, all from within the web interface. It’ll use the RADIUS Config attributes so that your don’t need to open your config file up for the webserver to write to. This will allow greater flexability in defining uamallowed domains, MAC password, idle time, and just about anything you could change in the coova chilli config files!