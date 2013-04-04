---
layout: post
title: "Redesigning Web Comics: organizing the content"
excerpt: WordPress 3.1 introduces "custom post formats," which are easy to confuse with "custom content types". Which is the best to use to organize web comics? I weight the pros and cons and sketch out two content structures to make sense of it all.
permalink: /2010/12/redesigning-web-comics-the-importance-of-organized-content/
categories:
  - comics
---
Just as I was finishing up the WordPress theme for the new web comics site at RacheltheGreat.com, <a href="http://wordpress.org/news/2010/11/wordpress-3-1-beta-1/">WordPress announced the new features for version 3.1</a>, due out any day now. As usual, there are new features which absolve me of reliance on plugins, notably for <a href="http://core.trac.wordpress.org/ticket/13818">custom post type archive pages</a>. But there was one wrench that made me slow down and rethink how I was going about this: <a href="http://lisasabin-wilson.com/wordpress-3-1-post-formats-reference">custom post formats</a>.
<h2>Custom post types vs. Custom post formats</h2>
[caption id="attachment_305" align="alignright" width="161" caption="My WordPress menu for managing comics"]<img class="size-full wp-image-305 " title="WordPress menu for managing comics" src="http://rachelnabors.com/wp-content/uploads/2010/12/comicsmenus.png" alt="WordPress menu for managing comics" width="161" height="331" />[/caption]

What is the difference between a custom post format and a custom post type? Actually, it's a semantic nightmare. "Custom post types" actually should be called "custom content types" or "custom page types" because they aren't "posts" per se. They behave more like pages, i.e. they don't have RSS feeds (without tweakery), they don't organize like blog posts, etc. "Custom post formats" is more like a distinction granted to your posts. They show in your RSS feed, in your blog archives. It's a less messy, more intrinsic sort of categorization system. For instance, you could have post formats for "quotes" or "asides".

Currently I'm using custom post types to organize and upload comics. This means that you manage comics through a "comics" menu the same way you manage posts in WordPress. They are separate, distinct entities on the backend.

But, what if it makes more sense to have comics as a <em>post format?</em> That means when you want to post a comic, you'd do it like you were posting a new blog post, just adding the distinction that this post is a comic. The comic post would then appear in your main RSS feed, lumped in with any other blog posts you might be making. Personally, I want to keep my blog posts and my comics feeds separate from each other, but maybe that's me?

To settle the matter, I sketched out what the information architecture for both these options would look like.
<h2>Comics, blog posts and gallery posts structured with custom post formats</h2>
[caption id="attachment_303" align="aligncenter" width="310" caption="Unorganized WordPress Web Comic theme Information Architecture"]<img class="size-full wp-image-303" title="Unorganized WordPress Web Comic theme IA" src="http://rachelnabors.com/wp-content/uploads/2010/12/wordpressIAunorganized.jpg" alt="Unorganized WordPress Web Comic theme IA" width="310" height="504" />[/caption]

This is obviously way too unorganized for me. Look at that long tail of sequentially uploaded content. If you tried to read from one end of it to the other, you'd be interrupted all along the way by unrelated content. Gallery post, blog post, comic post, blog post, ad infinitum. Maybe there will be some nifty way to separate those formats into distinct flow-paths, but this is a new feature in WordPress, which means that it will be six months before I can really do any backflips with it. (I had a helluva time just getting get_terms to paginate!)
<h2>Comics, blog posts and gallery posts structured with custom post types</h2>

[caption id="attachment_304" align="aligncenter" width="310" caption="(My) organized WordPress Web Comic theme Information Architecture using custom post types"]<img class="size-full wp-image-304" title="(My) organized WordPress Web Comic theme Information Architecture using custom post types" src="http://rachelnabors.com/wp-content/uploads/2010/12/wordpressIAorganized.jpg" alt="(My) organized WordPress Web Comic theme Information Architecture using custom post types" width="310" height="446" />[/caption]

This is an m-shaped information space. Look at how the blog, the gallery and the comics are separate, each with their own RSS feed, their own archives, and separate "flows". There's no way for any of the flows to cross paths. There is no archive page where your art, comics and blog posts are vomited up on the page in chronological order, much to the horror and confusion of a would-be reader.
<h2>Why does this matter?</h2>
<h3>Search Engines</h3>
When your site is getting crawled, spiders like to "feel" an underlying structure. "Ahh, this is an archive page for a comics series. Oh, here's the blog. Yes, I see." A T-shaped or long-tail content structure doesn't help search engines form these distinctions.
<h3>Data Manipulation</h3>
It's also easier to manipulate separate content types. You can give a custom content type its own RSS, its own archive page, its own search. If you used a custom post format, you'd have to find a way to <em>separate </em>its RSS, its archives, its search from the others. I find subtractive coding way harder than additive, so I personally prefer to build up rather than tear down.
<h3>Usability</h3>
I also think that the special comics menu item (shown earlier in this post) will make adding and managing comics easier for users.
<h2>Conclusion</h2>
In the future, I may eat my own words and custom post formats may turn out to be the more robust, intuitive solution. But right now its too new and too troublesome to restructure. I will be using custom post types for the new theme, believe it.