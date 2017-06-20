---
layout: post
title:  "Fighting Wordpress WPCoreSys spam and hacks"
date:   2017-06-16 16:15:15 +0200
categories: hacking
---

For one of my clients, [Holwerda Coaching](http://holwerdacoaching.nl), I'm fighting a really tough hack. Over the last two weeks I've had many moments where I thought I fixed it, only to realise the spam popped up somewhere else. Today for instance I just found the google search results to be including some spam pages. All of these pages are not found on the Wordpress backend. 

![Google Search Results Holwerda Coahcing](/assets/img/Screen-Shot-2017-05-23-at-15.25.56.png)

Other times just random posts start showing up. I installed multiple login blocking plugins to keep people from brute-forcing them in but they seem to be coming in every time any way. This told me they must have a backdoor coming in, maybe straight into the database even. 

But, where did that start. It was time to start checking my plugins and themes. I started by removing anything we weren't using. Then I installed the **[Plugin Inspector](https://nl.wordpress.org/plugins/plugin-inspector/)** plugin. One by one I checked every plugin and got really confused really soon. There were some low risks being noticed in multiple plugins. But it was really technical and nothing really looked suspicious. Until I came to the following plugin: WPCoreSys. This looked weird and unfamiliar. I checked in my plugin list and it wasn't  even there. Now, this was suspicious. A quick search resulted in this article: [WPCoreSys (Dolly) Hack](https://www.webvolutionchicago.com/wpcoresys-dolly-hack/).

This looked serious. 

I needed proper access to the plugins folder on the backend to delete the `WPCoreSys.php` from the plugins folder, as it had been hidden from the Wordpress admin interface. Then I made sure to check the data base as well and deleted all references of the WP-Dolly plugin to make sure they could not get access from the database anymore either. 

Although the website is still very much under attack. Nobody has managed to get in since. Since working on the site I took a couple of safety measures. I deleted old admin users and created custum longform generated passwords for all other users. I blocked direct access to `wp-login.php` and changed the `wp-admin` url. I also created a system where you can only attempt login 3 times within 24 hours. At the time of writing there are 6 IP's blocked out because of this. 

Finally everything seems safe and I can get to work on what I was hired to do. 

## Find out if your Wordpress installation has been hacked
<iframe src="//www.slideshare.net/slideshow/embed_code/key/eGLsdJxnVcl0Gg" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/SucuriSecurity/sucuri-webinar-how-to-clean-hacked-wordpress-sites" title="Sucuri Webinar: How to clean hacked WordPress sites" target="_blank">Sucuri Webinar: How to clean hacked WordPress sites</a> </strong> from <strong><a target="_blank" href="https://www.slideshare.net/SucuriSecurity">Sucuri </a></strong> </div>