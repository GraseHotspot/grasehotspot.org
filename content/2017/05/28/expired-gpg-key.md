---
title: 'Expired GPG Key'
date: '2017-05-28T09:24:08+10:00'
status: publish
permalink: /2017/05/28/expired-gpg-key
author: tim
excerpt: ''
type: post
id: 441
category:
    - News
tag: []
post_format: []
---
Sometimes we don’t get things done in the timeframe we expect. This can lead to some embarrassing errors. Like when the GPG key for signing the APT repository expirs! Whoops.

If you are getting the following error

```
<pre class="prettyprint">W: GPG error: http://packages.grasehotspot.org purewhite InRelease: The following signatures were invalid: KEYEXPIRED 1495184631
```

Then the GPG key you have has expired. But that’s ok, because I’ve extended the expiry, and you just need to run a few commands to get your computer to recognise the new expiry date!

Run the following commands and you’ll be good to go.

```
<pre class="prettyprint">wget https://github.com/GraseHotspot/grase-repo/raw/master/key/grase.hotspot.2017.gpg
sudo cp grase.hotspot.2017.gpg /etc/apt/trusted.gpg.d/
```

After running these commands, running “apt-get update” we read the APT repository properly again.