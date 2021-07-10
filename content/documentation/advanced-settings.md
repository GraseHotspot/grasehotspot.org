---
title: 'Advanced Settings'
date: '2015-05-29T13:49:12+10:00'
status: publish
permalink: /documentation/advanced-settings
author: tim
excerpt: ''
type: page
---

There are a number of advanced settings for activating features that haven't yet had enough testing. Here are some details of them

All settings can be access at http://graseserver/grase/radmin/advancedsettings.php however, because there is no validation of what you submit on this page, you can seriously break your install if you play with them.

## Change username / password length
* **passwordLength**
* **usernameLength**

These 2 options can be used to modify the username and password length that is automatically generated for new users and batch users. Please note, that the value is not the length of the password, rather a parameter passed to the code that generates those usernames and passwords. You'll need to experiment with the values to find out what length username/password is actually generated

## Simpler username/passwords for mobile devices
* **simpleUsername**
* **numericPassword**

**simpleUsername** will cause batch ticket creation to create usernames that are all letters (no numbers), which makes for easier entering of usernames on a phone.

**numericPassword** will cause batch ticket creation to create numeric passwords

