---
layout: post
title: Simple Steps To WordPress Security Talk
excerpt: 
permalink: /2011/05/simple-steps-to-wordpress-security-talk/
categories: 
  - speaking
  - wordpress
---
<div id="__ss_8046582" style="width: 425px;"><strong style="display: block; margin: 12px 0 4px;"><a title="Word p ress-security-talk" href="http://www.slideshare.net/CrowChick/word-p-resssecuritytalk">WordCamp Raleigh 2011 Word Press Security Talk</a></strong>
<div style="padding: 5px 0 12px;">View more <a href="http://www.slideshare.net/">presentations</a> from <a href="http://www.slideshare.net/CrowChick">Rachel Nabors</a></div>
&nbsp;

</div>
<h2>Other WordPress Security Resources</h2>
<ul>
  <li><strong>Block snoopy bots</strong> with <a href="http://digwp.com/2011/03/htaccess-wordpress-seo-security/">Jeff Starr's list of 6 great .htaccess bot-blocking techniques at Digging into WordPress</a></li>
  <li><strong>Move your WordPress installation out of your root directory</strong> with <a href="http://digwp.com/2009/07/move-your-wordpress-files-out-of-the-root-directory/">Jeff Starr's tutorial at Digging into WordPress</a></li>
  <li><strong>Password Management software: </strong><a href="http://agilebits.com/onepassword">1Password</a> or <a href="http://keepass.info/">KeePass</a> (free)</li>
</ul>
<h2>Featured WordPress Security Plugins</h2>
<ul>
  <li><a href="http://wordpress.org/extend/plugins/update-notifier/">Update Notifier</a>will email you every time there’s a new WP or plugin update to install.</li>
  <li><a href="http://wordpress.org/extend/plugins/limit-login-attempts/">Limit Login Attempts</a> prevents brute force attacks.</li>
  <li><a href="http://wordpress.org/extend/plugins/wp-security-scan/">WP Security Scan</a> looks through your WordPress installation and identifies common insecurities. It is super easy to understand and implement.</li>
  <li><a href="http://wordpress.org/extend/plugins/antivirus/">AntiVirus</a> keeps an eye on your theme files and emails you if anything changes them--like a hacker adding malicious code.</li>
</ul>
<h2>Code snippets</h2>
<h3>Prevent directory browsing</h3>
Turn off directory listing by adding this code to your .htaccess file:
<pre>Options -Indexes</pre>
<h3>Hide your wp-config file</h3>
Block all external access to your config file by adding this code to your .htaccess file:
<pre>&lt;files wp-config.php&gt;
order allow,deny
deny from all
&lt;/files&gt;</pre>
<h3>Defend against injection.</h3>
Protect against any attempt to modify your PHP GLOBALS and _REQUEST variables by adding this code to your .htaccess:
<pre>Options +FollowSymLinks
RewriteEngine On
RewriteCond %{QUERY_STRING} (&lt;|%3C).*script.*(&gt;|%3E) [NC,OR]
RewriteCond %{QUERY_STRING} GLOBALS(=|[|%[0-9A-Z]{0,2}) [OR]
RewriteCond %{QUERY_STRING} _REQUEST(=|[|%[0-9A-Z]{0,2})
RewriteRule ^(.*)$ index.php [F,L]</pre>
<cite>From <a href="http://www.smashingmagazine.com/2010/07/01/10-useful-wordpress-security-tweaks/">http://www.smashingmagazine.com/2010/07/01/10-useful-wordpress-security-tweaks/</a></cite>
<h3>Hide your WordPress version</h3>
Remove your WordPress version number from your header by adding this code to your functions.php:
<pre>remove_action('wp_head','wp_generator');</pre>
<cite>Credit to Jeff Starr: <a href="http://digwp.com/2009/07/remove-wordpress-version-number/">http://digwp.com/2009/07/remove-wordpress-version-number/</a>
</cite>
<h3>Don’t show login errors.</h3>
Hide login errors from hackers. Add this code to your functions.php:
<pre>add_filter('login_errors',create_function('$a', "return null;"));</pre>