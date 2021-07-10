---
title: 'Meaningful Reply-Message for Access-Reject'
date: '2011-04-03T01:54:11+10:00'
status: publish
permalink: /documentation/freeradius/meaningful-reply-message-for-access-reject
author: tim
excerpt: ''
type: page
id: 64
---
So the indepth post is at <http://tim.purewhite.id.au/2011/04/coova-chilli-freeradius-reply-message/>

Basically, FreeRadius sql and sql\_counter modules don’t give the most meaningful Reply-Message (if any). Here are snippits of code that bring more meaningful messages.

/etc/freeradius/sites-available/default

```
<pre class="dontquote prettyprint" lang="ini">authorize {
	preprocess
	chap
	mschap
	suffix
	eap {
		ok = return
	}
	sql{
	    notfound = 1
	    reject = 2
	}
	if(notfound){
        update reply {
            Reply-Message := "Login Failed. Please check your Username and Password"
        }
        reject
	}

	if(reject){
        update reply {
            Reply-Message := "Login Failed. Please check your Username and Password"
        }
        reject
	}	

	expiration{
        userlock = 1
    }
    if(userlock){
            update reply {
                    Reply-Message := "Your account has expired, %{User-Name}"
            }
            reject
    }

	logintime

	noresetBytecounter{
        reject = 1
    }
    if(reject){
            update reply {
                    Reply-Message := "You have reached your bandwidth limit"
            }
            reject
    }

	noresetcounter{
        reject = 1
    }
    if(reject){
            update reply {
                    Reply-Message := "You have reached your time limit"
            }
            reject
    }

	pap
}

post-auth {
	sql
	exec
	Post-Auth-Type REJECT {
        update reply { # Fallback error message
            Reply-Message = "Login Failed. Please check your username and password"
        }
		attr_filter.access_reject
	}
}
```

(Where testing for notfound and reject, you can give more specific error messages if you wish, however this can lead to abuse of the system if for example it tells them the username is valid but the password isn’t.)