---
layout: post
title: "SIGGRAPH 2016 Deluxe Report Pt I: Virtual Reality"
excerpt: "SIGGRAPH 2016 was all about virtual reality, but is the Web ready for VR? Maybe with WebVR..."
featured-image: "/img/2016/siggraph_welcome.jpg"
---

This year a [Web Animation Weekly](http://webanimationweekly.com/) subscriber generously sent me to [SIGGRAPH](http://s2016.siggraph.org/) to report on the conference and what its news means for the Web animation community. SIGGRAPH is a huge, international conference devoted to computer graphics and interactive techniques. All kinds of people show up here, from researchers in Japan to venture capitalists from India to engineers from down the street at Disney and Pixar.

<figure>
    <img src="/img/2016/siggraph_welcome.jpg" srcset="/img/2016/siggraph_welcome-2x.jpg 2x" height="450" width="600" alt="Rachel Nabors striking a victory pose in front of the Anaheim Convention Center.">
    <figcaption>
        Web Animation Weekly goes to SIGGRAPH!
    </figcaption>
</figure>

This year the conference converged on virtual and augmented reality, so that’s what I’ll cover first. Pokemon Go was in high gear and served as a point of commiseration for many attendees&mdash;when my assistant and I were arranging Web animation meetups at Downtown Disney, we were also loading up on the area’s fire type pokemon!

Google was showing off their handheld 3D mapping device, [Tango](https://www.youtube.com/watch?v=Tu5VpWJIbxo&amp;list=TLR3aE7uzJKj4yODA4MjAxNg) (it was a little sluggish in person and on stage), as well as _[Pearl](https://www.inverse.com/article/14427-google-s-vr-film-pearl-combines-disney-charm-and-cutting-edge-tech)_ a VR story from ex-Disney Patrick Osborne.

_Pearl_ was something to behold, even on [Google Cardboard](https://vr.google.com/cardboard/) at a demo party, but as I whipped my head around to fully absorb what was happening around me virtually, I knocked into other people crowding around the table back in the real world. Watching [Giant](http://giantofficial.com/) required huddling in a room that fit a maximum of two people, wearing expensive headgear. The experience was something else, but will it scale for mass consumption?

<figure>
    <img src="/img/2016/siggraph_crowd.jpg" srcset="/img/2016/siggraph_crowd-2x.jpg 2x" height="450" width="600" alt="People crowded around a table wearing VR goggles.">
    <figcaption>
        VR in a crowd is rather horrible.
    </figcaption>
</figure>

It’s possible [VR may not be the new paradigm for storytelling](https://www.techinasia.com/virtual-reality-storytelling), but it does make for one hell of an experience when done well. While Oculus’s animated short film [_Henry_ recently won an Emmy](https://www.wired.com/2016/09/oculus-henry-emmy/)&mdash;the first VR short to do so&mdash;_[Dear Angelica](https://www.youtube.com/watch?v=JbzbX9F6Lhs)_ was not so much a story as the experience of being in 3D painting as it’s being created. It was made with [Quill, a house-made 3D painting tool](http://www.wired.co.uk/article/oculus-quill-drawing-tool-virtual-reality).

Where VR really seemed to excel at this conference was in real-world, high-stress training “games,” like _[Injustice](https://vimeo.com/152674197)_, where users are forced to make split-second decisions then see how their choices pan out. Studies show people who go through real world experiences and simulations do better when confronted with the same situations than those with no experience at all. I could see VR taking off for emergency training: drills for exiting a burning plane or getting to safety during an earthquake. Also, empathy training: I wonder how many police officers would approach the same situation in _Injustice_ differently _after_ playing the game and seeing their actions through a bystander’s eyes.

Additionally, VR has some compelling medical implications. [Voxel Bay](https://accad.osu.edu/assets/files/Voxel%20BayAbstract_0504.pdf), a VR game designed for children to play in a medical setting, is used to distract them from treatment-related pain or anxiety. On the surface, it seems like a promising way to prevent hemophiliac children from developing a lifelong phobia of the needles they depend on to live. But does it work? Follow up studies measuring the patients’ cortisol levels are in the works.

I was personally surprised by how much VR currently relies on goggles that blot out the rest of user’s visual input. This can cause motion sickness issues the industry still struggles to address. But not all VR requires complete visual submission. You can provide VR without goggles, as with this [fieldtrip to Mars](http://motionographer.com/2016/07/12/vr-without-goggles-field-trip-to-mars-sends-a-souped-up-school-bus-to-space/).

## VR on the Web

On the Web, we have the WebVR API, “&hellip;a set of DOM interfaces that enable WebGL rendering into Virtual Reality headsets and access to the various sensors for orientation, positioning, and input controls.” (From [Mozilla’s Hacks blog](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/).) While WebVR was not represented at SIGGRAPH, it is seeing strong support with browsers.

WebVR 1.0 is on [Firefox Nightly](https://blog.mozvr.com/webvr-1-0-available-in-firefox-nightly/), 1.1 is available on [custom Chrome builds](https://webvr.info/get-chrome/), and Microsoft just announcing they’re diving in over at [Edge](https://blogs.windows.com/msedgedev/2016/09/09/webvr-in-development-edge/). Things are looking up for VR online. But this [isn’t the first time we’ve tried to make VR in the browser a reality](https://tonyparisi.wordpress.com/2016/08/13/third-times-the-charm/). Let’s hope this time it sticks! In the meantime, you can [decide for yourself if the platforms you care about are WebVR ready](https://iswebvrready.org/).

[VR presents new challenges](http://motionographer.com/2016/08/01/4-things-we-wished-wed-known-before-creating-a-vr-experience-in-unreal/) for production and motion design workflows, from [pre-visualisation](https://vimeo.com/141330081) to [UX](http://www.uxofvr.com/). Even [graphics chips for mobile devices](http://malideveloper.arm.com/downloads/Presentations/GDC%202016/Theatre/Inside_VR_on_Mobile.pdf) must change.

But we are already solving for these unknowns, and now you can get started, too. [Moz VR](https://mozvr.com) is a great place to dive in to the world of WebVR. Also from the MozVR team, [A-Frame](https://aframe.io/) wraps three.js and WebGL in HTML custom elements, enabling folks to create 3D/VR scenes without having to master the intricacies of WebGL. It is declarative and tree-like, using CSS-style attributes with custom elements.

Will VR on the Web be _a thing_ going forward? I look forward to finding out!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Web Animation Weekly <a href="https://twitter.com/hashtag/SIGGRAPH2016?src=hash">#SIGGRAPH2016</a> editorial team met up last night. <a href="https://twitter.com/IvanaMcConnell">@IvanaMcConnell</a> <a href="https://twitter.com/KennaWars">@KennaWars</a> <a href="https://t.co/TJYizgkqdi">pic.twitter.com/TJYizgkqdi</a></p>&mdash; Rachel Nabors (@rachelnabors) <a href="https://twitter.com/rachelnabors/status/769268906422702080">August 26, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<figure>
    <img src="/img/2016/siggraph_alice.jpg" alt="Alice (in Wonderland) at SIGGRAPH.">
    <figcaption>
        Event Invites to the Web Animation meetups included <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API">Alice from Web Animations API Land</a>.
    </figcaption>
</figure>

<aside class="note">This is part of a series of <a href="http://webanimationweekly.com/">Web Animation Weekly newsletters</a> (<a href="http://rachelnabors.com/2016/09/27/siggraph-webgl/">the next installment on 3D on the web is next week</a>). I want to thank feature editor <a href="https://twitter.com/IvanaMcConnell">Ivana McConnell</a> for reviewing my SIGGRAPH notes and fetching many tasty links to round out this report. Thanks also to the subscriber who sent me to the conference, and to the SIGGRAPH organizers who let me hold a Web animation session at the last minute. And a thanks to <a href="https://twitter.com/kennawars">Kenna Warsinke</a> for coming with me and helping cover events and arrange the Web animation session. All of these people are good and wonderful.</aside>
