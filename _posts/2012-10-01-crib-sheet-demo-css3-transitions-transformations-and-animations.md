---
layout: post
title: "Crib sheet + demo: CSS3 transitions, transformations, and animations"
excerpt: In my preparations for my CSS Dev Conference session on music videos with CSS3 and HTML5 audio, I've been keeping notes and making some sample animations. Please enjoy the fruits of my experimentation and a demo page featuring a small furry dude...
permalink: /2012/10/crib-sheet-demo-css3-transitions-transformations-and-animations/
featured-image: http://media.rachelnabors.com/wp-content/uploads/2012/09/tuna-waits_dribbble.jpg?5c0150
categories: animation
---
I've been working on my <a href="http://sched.cssdevconf.com/event/eaf406a94449d904a1f82878ac76577c#.UGjYxvl27Hc">CSS3 music video session for CSS Dev Conference</a>, and I've found it handy to write this little guide to the main distinguishing points of CSS3 transitions, transformations and keyframe animations. They're all very similar but startlingly different. Some are more suited to certain applications than others, as you shall soon see.

(If you want to get right to the demo page animation, <a href="http://www.rachelnabors.com/animations/curtains.html">here you go</a>. And yes, there's more to it than that. Click some stuff!)
<h2>"I could do that with jQuery."</h2>
When I first got started in web design back in 2008, if you wanted to make something move, you had to turn to jQuery's <a href="http://api.jquery.com/animate/">animate()</a> function or install a special <a href="http://jsanim.com/">JS library</a>. My initial aspiration as soon as I started learning JavaScript was to animate a music video. I made several weak attempts before giving up on the idea, including an <a href="http://www.rachelthegreat.com/ulQuery/">animated parallax of Hueco Mundo</a>, a setting from the <em>Bleach</em> manga. It should have been easy. How many anime openings have you watched and thought to yourself, "I could do that with jQuery?" (If you don't watch much anime, the correct answer is <strong>most of them.</strong>)

But animating with JS is clunky to implement and <a href="http://dev.opera.com/articles/view/css3-vs-jquery-animations/">more memory intensive</a>. I could recreate my Hueco Mundo example using just CSS with a fraction of the code and dependencies of the original. So when your boss asks for some "razzle dazzle," before you reach for your trusty script tags, consider cracking open your stylesheet first.
<h2>Just a sweet Transition...</h2>
Use transitions when you want to change a CSS property with a little pizzaz, like fading a new color into a button when a user hovers over it.

Transitions are limited. You can only use them on CSS properties, and you can only use them with:
<ul>
  <li>The pseudo classes :hover, :active, :focus</li>
  <li>If you use JS to change CSS properties on the transitionable element, be it directly through the addition of inline styles to said element or indirectly through the addition of a class that changes its CSS through the cascade.</li>
</ul>
Transitions go on the element you want to animate like so:
<pre>.transitionable {
  color: red;
  transition: color 2s linear;
}</pre>
That syntax is basically <code>transition: $property $time $easing;</code>

You can use delays and chain transitions for some very nice effects. The curious can <a href="http://www.alistapart.com/articles/understanding-css3-transitions/">learn more about CSS transitions over at A List Apart</a>.

<div class="aside"><strong>Hint: </strong>You really only need the property you want to change and the time over which you want it to change. <code>$easing</code> is totes optional. The default is <code>ease</code>, but you might choose <code>linear, ease-in, ease-out, ease-in-out,</code> or, if you're feeling particularly mathematical <code>cubic-bezier</code>. These easing options seem to be the going norm for all CSS3 animationry, so this is the last I shall speak of them. If you want to learn by doing, check out <a href="http://matthewlein.com/ceaser/">Ceaser</a> and play with the animations directly--even make your own cubic bezier!</div>

To kick the transition off, just change the CSS property you set in the above. Like so:
<pre>.transitionable:hover, .js-added-class .transitionable {
  color: blue;
}</pre>
<h3>Gotchas</h3>
<ul>
  <li>You must explicitly declare the property you want to change in order to target it with a transition. If we didn't declare that <code>.transitionable { color: red; ...}</code> above, nothing would happen when you hover over it.</li>
  <li>Transitions can't be run on page load, though. CSS3 animation keyframes will help you there. But transitions need a kick off event to do something.</li>
  <li><a href="http://www.w3.org/TR/css3-transitions/#animation-of-property-types-">Only works with certain properties.</a></li>
</ul>
<h2>Even Sweeter Transformations</h2>
CSS3 can<strong><em> transform</em></strong> an element on the page, rotating it, scaling it, doing something with it, whereas transitions just smooth what would otherwise be a jarring jump between CSS property values. Since <code>transform</code> is a CSS property, <a href="http://dev.opera.com/articles/view/css3-transitions-and-2d-transforms/">you can use transitions to apply transformations</a>. Transformations can be 2D and 3D. I haven't done much with 3D yet. (I kinda detest 3D animation with the exception of <a href="http://en.wikipedia.org/wiki/Coraline_(film)"><em>Coraline</em></a>, which was a hybrid of stop-motion and 3D.)

You can translate, scale, rotate and translate (move) an element.

CSS transformations are special in that they need <em>two</em> properties to work:
<ol>
  <li><code>transform</code> (the transformation settings you wish to apply)</li>
  <li><code>transform-origin</code> (the location from which you want to orient those settings--should you fail to provide it, the default value is <code>50% 50%</code> i.e. "center")</li>
</ol>
<pre>.transformable {
  transform: rotate(0deg);
  transform-origin: 30px bottom; // works just like positioning background images.
}</pre>
Transforming with CSS is handier than using SVG if only because you can set <code>transform-origin: center,</code> whereas with SVG, you'd have to calculate the element's center and give its coordinates from the top left corner of the element. (Responsive? I think not.)
<h3>Gotchas</h3>
Transforms <em>don't</em> effect the flow of a document. The original location is occupied, and elements "in the way of" the new location do not budge.
<h2>Animations &amp; Keyframes</h2>
Animations are a lot like transitions except they don't require a state change like a :hover to kick off. They can happen after a set amount of time, on page load, whatever really. While transitions only transition on set properties. Animations can do what they want with any kind of properties, <strong>whether or not you've declared them.</strong>

Animations can use both <strong>transitions</strong> <em>and</em> <strong>transforms</strong> inside their syntax. First you declare keyframes:
<pre>@keyframes spin {
  from { 
    transform: rotate(0deg); // A CSS transform!
    opacity: 1; // A property to transition!
  }
  to { 
    transform: rotate(360deg);
    opacity: 0;
  }
}</pre>
Then you attach them to a selector by name:
<pre>.spinner {
  animation-name: spin; // use the name of the keyframes you defined above
  animation-duration: 3s; // required or nothing happens
}</pre>
Or shorthanded with all the options:
<pre>animation: $name $easing $duration $iteration-count;</pre>
There's an interesting option for <code>$easing</code> called steps. Steps give you a jumpy abrupt lack-of-transition, and their syntax is a little odd. But you can use them to <a href="http://codepen.io/andyfitz/pen/dyCgh">replace animated gifs with sprites</a>.

Animations are actually quite straightforward and <abbr title="Don't Repeat Yourself">DRY</abbr>. You can define one once and use it many times. More of CSS should work like this, in my opinion. There are many wonderful things you can stuff inside keyframes and do with animations. I'd just be copying this article verbatim if I tried to explain it all here: <a href="http://dev.opera.com/articles/view/css3-animations/">dev.opera's <em>Making a Move with CSS3 Animations</em></a>
<h3>Gotchas</h3>
<ul>
  <li>If you don't specify the duration, nothing happens.</li>
  <li>CSS3 animations work in pretty much everything but IE if you use prefixes.</li>
</ul>
<h2>In demonstration</h2>
I used all of the above to make <a href="http://www.rachelnabors.com/animations/curtains.html">a lovely interactive animation</a> (psst, give the tassel a tug). Please enjoy the surprise, and have a poke at the code! I made all these notes while working on this piece. While these may be covered in the opening of my talk, I'll actually be going into more detail about the HTML5 audio API than the minutiae of CSS3 easing options. There's just so much to cover on timing and events!

<figure><img title="Tuna Waiting" src="http://media.rachelnabors.com/wp-content/uploads/2012/09/tuna-waits_dribbble.jpg" alt="Tuna the cat sitting next to a piece of luggage marked with a tag to Hawaii." width="400" height="300" />
  <figcaption>Check out this demo! 100% gif-free.</figcaption>
</figure>

Go out there and make something cool!