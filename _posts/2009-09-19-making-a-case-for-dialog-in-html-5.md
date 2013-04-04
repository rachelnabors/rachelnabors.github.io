---
layout: post
title: Making a case for the dialog element in HTML 5
excerpt: 
permalink: /2009/09/making-a-case-for-dialog-in-html-5/
categories: 
  - specs
---
I'd spent a lot of time writing a post about the glorious new tags introduced in HTML 5, but unfortunately, just as I was about to put it up, I caught wind that <a href="http://html5doctor.com/september-html5-spec-changes/">the spec for the &lt;dialog&gt; tag has been nixed</a>. Considering that a hefty portion of my article was devoted to illustrating how the new tag could be put to use to display dynamically generated web comics of instant message conversations, I was understandably put out.
<h2>The dialog element was just a glorified definition list.</h2>
Originally, this was the suggestion for <a href="http://html5doctor.com/a-little-more-conversation-with-dialog/">how to use <code>&lt;dialog&gt;</code></a>:
<code>
&lt;dialog&gt;
&lt;dt&gt;Brenda&lt;/dt&gt;
&lt;dd&gt;I love Coco Wheats!&lt;/dd&gt;
&lt;dt&gt;Jason&lt;/dt&gt;
&lt;dd&gt;I prefer Malt-O-Meal.&lt;/dd&gt;
&lt;/dialog&gt;
</code>
Look familiar?
<code>
&lt;dl&gt;
&lt;dt&gt;Coco Wheats&lt;/dt&gt;
&lt;dd&gt;A cream hot cereal with a cocoa treat.&lt;/dd&gt;
&lt;dt&gt;Malt-O-Meal&lt;/dt&gt;
&lt;dd&gt;Like Coco Wheats only with malt instead of coca powder.&lt;/dd&gt;
&lt;/dl&gt;
</code>
Yes, <code>&lt;dialog&gt;</code> is unabashedly based on the definition list. It doesn't even try to hide the "data term" and "data definition" tags as it appropriates them. Admittedly, most people either don't use or don't know how to use definition lists because <a href="http://www.w3.org/TR/html401/struct/lists.html#h-10.3">the official definition list specification</a> is rather sketchy. But that's no reason to hijack its structure! Personally, I do not think the definiton list structure is perfectly suitable for dialog markup because:
<ol>
  <li>It allows multiple definitions for one term (or quotes for one speaker... I feel it would be better to lump these into one element and use paragraph elements to break up longer monologues).</li>
  <li>There is no way to indicate time.</li>
  <li>There is no way to make comments, as in an interview when the author inserts an explanatory note or in a play when the scene changes)</li>
</ol>
<h2>Why do we need dialog markup, anyway?</h2>
<a href="http://lists.w3.org/Archives/Public/public-html/2009Sep/0041.html">Microsoft complained that they didn't see the point in adding semantic tags for marking up conversations,</a> something people currently use p and div elements to do. <em>(Do recall that Microsoft doesn't exactly have a stellar track record for leading the Web browsing experience to new heights of excellence.</em>) They are also concerned that adding such an element to the HTML 5 spec would make more work for them.

Most discussions on this matter only use chat logs as examples of what dialog markup could be used for. Yes, chat logs seem rather trivial in the grand scheme of things. But what about plays? Interviews? <strong>Dynamically generated comics books? </strong>(Not to push my own cause!) Okay, excluding that last one, the other two are potentially big deals. Imagine if screen readers adopted a different tone when reading transcripts to the visually impaired. Imagine if we could use this to convey great plays of yore to little kids one day. None of this would happen tomorrow of course, but it can't happen at all without proper markup.

We are told that plenty of people are currently <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#conversations">using the paragraph element with a sprinkling of non-semantic tags and a few extra classes to get by</a> and that that'll have to do. To me, this sounds a lot like <a href="http://microformats.org/">microformats</a>. The semantics harpy in me wants special tags.
<h2>Ideas for <code>&lt;dialog&gt;</code></h2>
<h3>For simple conversations</h3>
<code>&lt;dialog&gt;
&lt;speaker&gt;Brenda&lt;/speaker&gt;
&lt;line&gt;I love Coco Wheats!&lt;/line&gt;
&lt;speaker&gt;Jason&lt;/speaker&gt;
&lt;line&gt;I prefer Malt-O-Meal.&lt;/line&gt;
&lt;/dialog&gt;</code>
<h3>For plays</h3>
<code>&lt;dialog&gt;</code><code>
&lt;time&gt;11:20am&lt;/time&gt;
&lt;speaker&gt;Brenda&lt;/speaker&gt;
&lt;line&gt;I love Coco Wheats!&lt;/line&gt;
&lt;speaker&gt;Jason&lt;/speaker&gt;
</code><code> &lt;line&gt;I prefer Malt-O-Meal.&lt;/line&gt;
</code><code> &lt;time&gt;11:30am&lt;/time&gt;
&lt;aside&gt;They have finished eating.&lt;/aside&gt;
&lt;speaker&gt;Brenda&lt;/speaker&gt;</code><code>
&lt;line&gt;I think I ate too much.&lt;/line&gt;
&lt;aside</code><code>&gt;Brenda burps&lt;/aside&gt;
</code><code>&lt;/dialog&gt;</code>
<h3>For chat logs</h3>
<code>&lt;dialog&gt;</code><code>
&lt;time&gt;11:20am&lt;/time&gt;
&lt;speaker&gt;Brenda&lt;/speaker&gt;
&lt;line&gt;Hiya Jason!&lt;/line&gt;
</code><code>&lt;time&gt;11:30am&lt;/time&gt;
&lt;speaker&gt;Jason&lt;/speaker&gt;</code><code>
&lt;line&gt;</code><code>Sorry, I was away from my computer!&lt;/line&gt;</code><code>
</code><code>&lt;/dialog&gt;</code>

How would <em>you</em> markup a conversation?