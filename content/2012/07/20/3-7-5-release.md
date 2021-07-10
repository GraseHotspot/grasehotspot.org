---
title: '3.7.5 Release'
date: '2012-07-20T08:26:12+10:00'
status: publish
permalink: /2012/07/20/3-7-5-release
author: tim
excerpt: ''
type: post
id: 294
category:
    - News
tag:
    - '3.7'
    - grase
    - news
    - release
post_format: []
---
After a few months of being without a proper computer, my new development machine has finally arrived. (I’ll post later what its specs ended up as). For some time now I’ve had people testing the dev versions for me, and so yesterday I pushed 3.7.5 to stable! 3.7.5 is a minor update, the changelog is below. (Just the 3.7.4-dev? changelogs, as 3.7.5 is 3.7.4-dev5 with the version number bumped)

- Cron archive scripts allowed negative time value which allowed usage after using all allowed time
- Fix Reports some more
- Check if bogusnxdomains has returned ips
- Shorten long “time” format from “days” to “d”
- Updated German Translation (S. Schneeweiß)
- Fixed bug preventing group table being created by newer MySQL servers
- Fixed bug (#73) that prevented expired users from being deleted
- Fixed bug (#50) Usermin menus broken
- Fix UUCP timerange filter to allow more values
- Added more contributors
- Some smart caching of user details and settings to reduce database calls significantly (and page load times) ref #63
- Fix report graphs (and filter out CoovaChilli User) Fixes #52
- Major fix for archiving users

Updates should be automatic unless you have disabled automatic updates. Please report all bugs to the [mailing list](https://grasehotspot.org/support/mailing-list/ "Mailing List") or the [bug tracker](https://grasehotspot.org/development/tracker/ "Tracker").