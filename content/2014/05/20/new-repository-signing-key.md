---
title: 'New Repository Signing Key'
date: '2014-05-20T20:08:25+10:00'
status: publish
permalink: /2014/05/20/new-repository-signing-key
author: tim
excerpt: ''
type: post
id: 370
category:
    - News
tag: []
post_format: []
---
Whoops. I didn’t catch the fact that the repository signing key was expiring. Normally I publish a new key a few months before the old one expires so that the expiry isn’t noticed. Somehow I missed it this time. For new installs, you don’t need to worry, however for existing installs, you’ll need to follow the below instructions to stop it warning you that it can’t verify the packages.

New key id C830ED66  
Key fingerprint = 6199 045D 5D07 3D98 A280 37CA 4315 7839 C830 ED66

To get your computer to accept the new repository

`$ sudo apt-get update<br></br>$ sudo apt-get install grase-repo`  
It’ll warn you that grase-repo can’t be authenticated, say yes to continue installing  
`$ sudo apt-get update`