---
layout: post
title: Responsive Design vs. the (real) World
excerpt: I do not think responsive design a the be-all and end-all solution for the mobile web, and by "mobile web" I mean "the web on small screens over sluggish connections." But I think media queries are actually one of the best things to happen to web design in recent years, right up there with decent font embedding.
permalink: /2011/06/responsive-design-vs-the-real-world/
categories: 
---
Recently I designed a page using nothing but fonts, HTML and CSS for a competition at fontdeck. I decided to use responsive design, that is to say I used media queries to style the page differently depending on your browser width. The process got me thinking about responsive design and its practical--and impractical--uses.

Personally, I do not think responsive design a the be-all and end-all solution for the mobile web, and by "mobile web" I mean "the web on small screens over sluggish connections." But I think media queries are actually one of the best things to happen to web design in recent years, right up there with decent font embedding.
<h2>Why Responsive Design does not make a mobile experience</h2>
I'll keep this short since <a href="http://www.lukejones.me/post/6651505197/responsive-web-design">full arguments and industry wank can be found in the comments on a post by Luke Jones</a>. But here's why <em>I</em> prefer building a mobile site for a mobile context as opposed to rearranging an existing content structure:
<ul>
  <li>Your desktop experience doesn't take mobile context into account. (Do people want to scroll through excerpts from your 5 latest blog posts or glance at a list of links to your 5 latest blog posts when they're on a subway trip with a bad connection?)</li>
  <li>Even if you hide large images and JS-heavy elements like slideshows with CSS, people's devices will still download them... <strong>slowly, </strong>making your mobile experience <strong>slow.</strong></li>
</ul>
People on mobile phones don't want to see all the same junk that's on their desktop site. There's just no room, no time, no processing power, and usually no interest. You have to restructure your information <em>as well as</em> design differently for the mobile web. Merely restyling a page could be likened to shaving an Afgahn hound to enter it into the toy poodle championship.

Of course there are cases when it makes sense to use responsive design, but you must carefully weigh your decision. Time spent making a special stylesheet could be put toward structuring a better mobile experience.

<span style="font-size: 20px; font-weight: bold;">The real power of Responsive Designs: Widescreen layouts</span>

Mobile aside, I think the real power of media queries shines when applied to widescreen layouts.

Not long ago, the web design world was a-twitter with "liquid layouts" and "flexible font-sizes." But the typographers and designers of the industry balked that such techniques gave far too much power to the user, sometimes resulting in decreased legibility (who would want to read a paragraph with a short line-height stretch across 1000 pixels after all?) Such techniques would distort designs at extreme resolutions or font-sizes. But now we can couple those techniques with media queries to present a phenomenal design at most resolutions--especially the upper end. For instance, if half your visitors have screens wider than 1072 pixels, and assuming that half of those people view their browser at full screen width (extremely common for Windows users and older users), does it not make sense to make use of that space rather than letting it go to waste at the edges of your 960 pixel-wide centered column of content? You could put ads there, or move author content from an article's footer to a new sidebar.

Here's another practical application: My PC laptop is a widescreen of exceedingly short stature. Sometimes I would visit a site with a fixed vertical navigation column, but I would be unable to get to the lower reaches (contact, etc) of the options because I was unable to scroll to them (the definition of fixed positioning is that it doesn't scroll with the browser window). You could use media queries to "unfix" that navigation column for people with low-slung widescreens and resolve that usability issue.
<h2>You can take Responsive Design too far</h2>
Here's the question, what do you get for putting so much effort into the appearance of your site? Will your visitors notice or care if they get a more convenient sidebar? Will you lose visitors if you don't use this? Will you gain them if you do? Will you improve their experience and make them happier with this investment, or would you gain more from putting that time and money into a promotional campaign or redesigning your signup process?

No one will ever come to your site and say, "I can't use this. It's got too much space around the edges!" or "It's not resizing when I change the shape of my browser. This other site does. I'll visit that one instead."

As designers and developers, it's easy for us to get caught up in the "how" and lose track of the "why." Every time we do something, we need to ask ourselves, "How am I benefitting people with this?" If you're only impressing your peers or your coworkers, you need to step back and re-evaluate your approach. There are lots of ways to make the Internet a better place. It pays to pick and choose your battles.