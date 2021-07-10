---
title: 'Caught by Max Int'
date: '2011-06-03T16:45:14+10:00'
status: publish
permalink: /2011/06/03/caught-by-max-int
author: tim
excerpt: ''
type: post
id: 117
category:
    - News
tag:
    - 32bit
    - 64bit
    - bug
    - maxint
    - php
post_format: []
---
So, MAX\_INT caught me out. Of course, I couldn’t work out why everything worked fine on my machine, but on another machine the exact same code was returning a negative number! I should have clued on when I was told that values over 2Gb caused problems. But why wasn’t the problem showing on my machine? It’s actually really simple, I’m using a 64bit machine so my “intval” function in PHP has a higher limit than on a 32bit machine. A quick google, a “bigintval” function and everything is back to normal!