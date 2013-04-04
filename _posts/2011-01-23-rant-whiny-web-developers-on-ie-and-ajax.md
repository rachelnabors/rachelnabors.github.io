---
layout: post
title: "Rant: Whiny web developers on IE and AJAX"
excerpt: I am deeply disappointed in some of my fellow designers and developers. There seems to be trend of shifting blame from ourselves to the people who use our sites. I hear lots of whining about how "Internet Explorer broke my design!" and "Why would anyone ever use our site without JavaScript enabled? We don't need to have a fallback process. That's more work." Oh noes! I think that's a bum attitude. Commence ranting...
permalink: /2011/01/rant-whiny-web-developers-on-ie-and-ajax/
categories:
---
I am deeply disappointed in some of my fellow designers and developers. There seems to be a going trend of shifting blame from ourselves to the people who use our sites. I hear whinings like these an awful lot, in person, on Twitter, on blogs:
<ol>
  <li>I built out this great design and had it working perfectly in Safari and/or Firefox, but when I looked at it on Internet Explorer, the stupid browser broke everything! I hate Internet Explorer. Why do people insist on using such a dopey browser, huh? Now I have much more work to do. Grr.</li>
  <li>Who cares how the site works with JavaScript turned off! If someone's online with JavaScript disabled, they have problems. Don't worry about making the site work without it. We'll save time on developing the backend and shift all the weight-lifting to the front end.</li>
</ol>
This kind of thinking is wrong. Just right out. But, there is logic behind the above:
<ol>
  <li>Internet Explorer has not always been a stellar browser. IE 8 and up are the only versions you can reasonably expect to handle CSS properly. People really should keep their browsers up to date, but IE users tend to get stuck on versions, meaning that if you develop for IE users at all, you have to hold back the rest of the class, so to speak.</li>
  <li>In ye olden days, people would turn off JavaScript in their browsers for performance and security reasons. Nowadays, very few desktops don't have it enabled. Ostensibly, JavaScript should be a given when developing for standard web browsers.</li>
</ol>
But this logic is flawed.

Whenever you create <em>anything</em> for <em>any</em> platform, a seasoned developer will tell you to test often on every platform <em>during</em> the development cycle, not at the very end. Only real veterans can pull together a magical site in one go and look at it in IE6/7 at the very end without needing to go back and make massive changes.

I see developing for "lamed" browsers as an accessibility issue. Not everyone has control over what browser they use, like the elderly and those who use corporate or school computers. I would as soon get upset about accommodating those IE-users as I would get huffy about putting alt-text on images. (I mean, seriously, who browses with images turned off these days, am I right? Oh, wait, I forgot about search engines, blind people, and mobile browsers on iffy connections...) It's arrogant to think everyone should use the browsers <em>you</em> like that <em>you </em>approve of. <em>Users aren't you, and they don't care about what you care about.</em> So get over yourself.

I actually like using IE as a testing browser because it's so unforgiving of incorrectly ordered tags. I've had broken markup that neither Safari nor Firefox noticed, but IE absolutely had a nervous break down over. If IE hadn't started having an epileptic fit, I never would have corrected the issue, which could have spelled all sorts of problems for mobile users, screen readers, and search engines. And trust me, once you know how to make IE happy, you can do so much more with other browsers because you've also learned how to tip-toe around its weak spots.

As for JavaScript, lots of people still use devices that might not understand it very well even if it's enabled, like Blackberries and screenreaders. And search engines just shrug their shoulders at it. You can make a blank HTML page where all the content is handled with JavaScript. But how is that better than a Flash site?

AJAX and JavaScript are great <em>enhancements</em>, but if you don't know why you're using it or how the site will function without it, you need to step slowly away from the text editor, man. You're making broad assumptions, and we know what kinds of trouble that leads to.

So stop whining. Start testing more. <em>Do </em>the heavy lifting. Anticipate the unexpected. It's what you're paid good money for, and it's your duty as a web developer. The Internet is counting on you.

End rant.