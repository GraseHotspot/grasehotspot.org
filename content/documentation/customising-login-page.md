---
title: 'Customising Login Page'
date: '2015-05-29T13:49:12+10:00'
status: publish
permalink: /documentation/customising-login-page
author: tim
excerpt: ''
type: page
---
The GRASE Hotspot Login page (for clients) is highly customisable. Basic customisation can be done with no web knowledge, however, for proper customisation you'll want some HTML/CSS knowledge.

There should be no need to edit any files to customise the login page, all customisations are possible from the admin interface. If you are finding you want to edit the template files, then file a bug report for what it is you can't change with CSS via the Admin interface.

See [Login Page Customisation Examples](./login-page-customisation-examples) for some examples

# Adding and removing elements

From the Portal Customisation section of the admin interface, the following elements can be turned on and off.
* Page Title
* Menu (Menu bar)
* Page Footer (includes links and Copyright)
* Help Link in the Menu
* The Free Login button
* The Voucher Login Form

## Free Login Button
The free login button allows you to have users login without the need to issue them individual vouchers. Create a Group that has the desired restrictions (e.g. Daily Time Limit) and then put the Group name in the "Free Login Group" field. This will enable the Free Login, and display the button. When a user clicks this button, an account is automatically created for them in the assigned group, with the Groups restrictions, and a session is started.

The text of the Login button can be customised as well. If you wish to hide the Title of this section, please use CSS

## Voucher Login Form
You may wish to disable the Voucher Login form (Username/Password form) if you have enabled the Free Login button. If you disable this form, then only the Free Login will work

# Full customisation of Login Page Look
The Portal Customisation page contains a number of CSS and HTML template fields. These can be used for full customisation of the login form.

## Terms and Conditions Template
By filling in HTML in the Terms and Conditions template, you'll enable the displaying of the Terms and Conditions above the login form. Leaving this template empty will remove the Terms and Conditions section.

## CSS
Using the **Disable All Default CSS** toggle, you can prevent the loading of any of the default stylesheets. The only CSS that will then be loaded is the CSS in the **Main CSS** template. This allows you to easily apply your own styles without having to constantly override the default styles.

Most customisations can be done without disabling the default CSS, and just adding your extra CSS styles to the **Main CSS** template

## HTML
By using the **HTML Above Login Form** and **HTML Below Login Form** templates, you can add any extra HTML content you require for your login form. Combined with the custom CSS, you can now completely customise the look of your login form to anything you can think of


## Images
If you need images in your custom login form, upload them to /var/www/images/ and then you can reference them in your CSS/HTML as **href='/images/....'**
### Logo
If all you need is your logo, use the "Site Logo" uploader to upload your logo. It's then referenced in the div with id '''return''' allowing you to use CSS to style it. The default CSS for the logo is
``` css
#return {
    background: url('/grase/images/logo.png') bottom right no-repeat;
}
```