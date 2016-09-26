---
layout: post
title: "SIGGRAPH 2016 Deluxe Report Pt II: the 3D Web"
excerpt: "At this year’s SIGGRAPH, WebGL was everywhere, as was something called X3DOM. I met the Web3D Consortium and saw first-hand how 3D can be put to work inside browsers and educational systems to build a better world for us to live in."
featured-image: "/img/2016/siggraph_selfie.jpg"
---

At this year’s [SIGGRAPH](http://s2016.siggraph.org/), _the_ computer arts conference, WebGL was everywhere, as was something called X3DOM. I met the Web3D Consortium and saw first-hand how 3D can be put to work inside browsers and educational institutions to build a better world for us to live in.

<img src="/img/2016/siggraph_selfie.jpg" srcset="/img/2016/siggraph_selfie-2x.jpg 2x" height="480" width="640" alt="Rachel Nabors poses in front of a SIGGRAPH logo.">

## The Web3D Consortium: the greatest Web 3D allies you’ve never heard of

[The meeting of the Web 3D Consortium](http://web3d2016.web3d.org/program/) was collocated at a nearby hotel, and I got to ask questions to many of the consortium’s members directly. One of my first was… what the heck is the Web3D Consortium? So few people know what it is, self-included!

[Web3D Consortium](http://www.web3d.org/about) is a non-profit group working on royalty-free standards that enable real-time 3D across applications, networks, and XML web services. They work closely with the International Standards Organization (ISO), Open Geospatial Consortium (OGC), World Wide Web Consortium (W3C&mdash;the folks I work with). They have working groups for CAD, MR ([the difference between VR, AR and MR](http://www.awn.com/blog/three-rs%20)), and even [medical applications](http://www.web3d.org/case-studies/preoperative-planning-3d-printed-hearts/medically-accurate-3d-printed-hearts).

One of the projects they work on is [H-Anim](http://www.web3d.org/standards/h-anim), a standard for defining human motion in 3D for the Web. Another project is [X3DOM](http://www.x3dom.org/), which lets you include 3D scenes on a web page using XML-like sytax. It runs on top of WebGL and is supported all the way back to IE 7! If this XML format sounds familiar, that’s because this project grew out of VRML--literally “XML for VR.” The members I met seemed to pride themselves on X3DOM's archivability and utility for higher education.

The [Fraunhofer Institute for Computer Graphics Research](https://www.igd.fraunhofer.de/en) did a talk on X3DOM, and making declarative 3D a first-class citizen in every web browser. It’s interesting to see academic institutions recognising the power of the web (and 3D within the web) as a place for research and academic advancement! They’re also working on bringing physically-based rendering (PBR) to the Web, [something which has been gathering steam for a while now](http://blog.playcanvas.com/physically-based-rendering-comes-to-webgl/).

<figure>
    <img src="/img/2016/siggraph_art.jpg" srcset="/img/2016/siggraph_art-2x.jpg 2x" height="450" width="600" alt="A wall covered in attendees' drawings.">
    <figcaption>
        There was art all over these panels at the conference. Can you spot <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API">Alice in Web Animations API Land</a>?
    </figcaption>
</figure>

## WebGL 2 and WebGL Next

There was much talk about WebGL Next, the proposed successor to WebGL 2, which [some people have some Big Opinions about](http://floooh.github.io/2016/08/13/webgl-next.html). WebGL features heavily in bringing VR to the Web, as you can see in [this W3C post on the matter](https://www.w3.org/blog/2016/09/bringing-virtual-reality-to-the-web-platform/). Remember, even X3DOM runs on top of WebGL!

## Learning with WebGL

At a panel of college professors discussing teaching 3D graphics with WebGL, Firefox got major shout outs for not only for [having a shader editor](https://developer.mozilla.org/en-US/docs/Tools/Shader_Editor) (Chrome doesn’t seem to), but also for having great turn around time on bug fixes. One of the professors was admonishing students to report every bug they found! A win for <abbr title="Open Source Software">OSS</abbr>.

WebGL is useful for teaching about how the <abbr title="Graphics Processing Unit">GPU</abbr> works, and in some browsers, WebGL runs faster than its C# counterparts! “The PlayStation 4 interface is WebGL and works great!” Everyone lauded WebGL as a great place to start learning computer graphics. These teachers seemed to be of a mind that students can and _should_ learn more than one language in their lifetimes. Why not start with JavaScript before diving into C++? (I wholeheartedly endorse this mindset.)

Patrick Cozzi, author of _OpenGL Insights,_ said, “It is a great time to get into WebGL.” Are you ready to get into it? What luck! One of the panelists, Eric Haines, co-created [a full (and free!) interactive 3D graphics course on Udacity](https://www.udacity.com/course/interactive-3d-graphics--cs291) where you can learn the basics of meshes, transforms, cameras, materials, lighting, and animation with WebGL.

### Extra WebGL Learning Materials

* Know the basics and ready to make something with WebGL? [Find the best tool for the job.](https://medium.com/@evejweinberg/all-the-webgl-tools-and-frameworks-i-have-looked-at-a1c22154591b)
* A little overwhelmed by all this? Rachel Smith has some [advice on where to start with Canvas or WebGL.](https://github.com/rachsmithcodes/ama/issues/2)
* If you want to get started with WebGL 2, [here’s a primer](http://webgl2fundamentals.org/).

## WebGL IRL

I was impressed with many of the uses for WebGL I saw at SIGGRAPH. Bentley’s [ContextCapture](https://www.acute3d.com/contextcapture/) takes arial photos and turns them into interactive 3D models. It was used to create a model of Philadelphia to prepare security measures for the Pope’s visit. [Propeller](https://www.propelleraero.com/) uses photos taken by drones to create 3D models you can take measurments from. The implications for mining, fishing, any industry where large amounts of stuff must be measured accurately at a glance is impressive. [Cesium](https://cesiumjs.org/) is involved with a lot of these types of projects. It is an open source JavaScript library for 3D globes and maps and visualising dynamic data.

All of these uses for WebGL realize the Open Web’s promise of low cost solutions for real world problems. It was reaffirming to see what could be done with a consumer grade drone and a browser. That’s not to say that [WebGL experiments like Neve](https://medium.com/@activetheory/neve-webgl-and-vr-d42a25856d67) aren’t equally important to our ecosystem. But in the web design and development world, it’s more common to see 3D in storytelling use cases rather than industrial ones. This was a refreshing alternative.

## Bonus: the following has less to do with the Web, but is awesome.

Made something cool with 3D or VR? [Sketchfab](https://sketchfab.com/) lets you share it. It’s a little like Codepen: you give it some code, and it gives you an embeddable, rendered example. Game dev companies use Sketchfab to share character designs with fans on their Facebook pages, for instance. (I’m partial to its [Cultural Heritage applications](https://sketchfab.com/categories/cultural-heritage), personally.) Sketchfab also presented [their own PBR](https://sketchfab.com/pbr) (that's "physically-based rendering", not "Pabst Blue Ribbon"!) at SIGGRAPH as well.

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xg40RzBIqTY" frameborder="0" allowfullscreen></iframe>
    <figcaption>
        Live2D unveiled Euclid, their proprietary editor for turning 2D drawings (Photoshop, anyone?) into interactive 3D models with a cel-shaded appearance for games and animation. It really does look like the style of animation used in the latest Pokemon games.
    </figcaption>
</figure>

<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aE37l6RvF-c" frameborder="0" allowfullscreen></iframe>
    <figcaption>
        <em>Bound,</em> a PS4 game by Plastic, used motion-capture on ballet and contemporary dancer Maria Udod to bring its playable character to life. You can read more about how they approached it (and why they chose to use motion-capture rather than animate from scratch) in <a href="https://the-optional.com/how-dance-gave-new-life-to-ps4-platformer-bound-aade798a9b5e?gi=44d4ce5a3d87">this behind-the-scenes post</a>.
    </figcaption>
</figure>


<figure>
    <img src="/img/2016/siggraph_kubo.jpg" srcset="/img/2016/siggraph_kubo-2x.jpg 2x" height="450" width="600" alt="Three puppets from Kubo and the Two Strings on display at a SIGGRAPH panel.">
    <figcaption>
        If you haven’t gone to see <em><a href="https://www.youtube.com/watch?v=p4-6qJzeb3A">Kubo and the Two Strings</a></em> yet, you should get on that. While the entire film is stop-motion, it uses advanced compositing techniques to achieve a rich complexity impossible in an analog production environment. The effect is otherworldly, truly the height of its craft.
    </figcaption>
</figure>

<hr />

This brings us to the end of the SIGGRAPH Special! If you enjoyed this, [consider donating a little to keep Web Animation Weekly going](https://www.patreon.com/rachelnabors?ty=h) or sharing this post someone. Either way, spread the Web Animation Love!

<aside class="note">This is part of a series of <a href="http://webanimationweekly.com/">Web Animation Weekly newsletters</a> (<a href="http://rachelnabors.com/2016/09/18/siggraph-vr/">the previous installment on VR was last week</a>). I want to thank feature editor <a href="https://twitter.com/IvanaMcConnell">Ivana McConnell</a> for reviewing my SIGGRAPH notes and <a href="https://twitter.com/kennawars">Kenna Warsinke</a> for coming with me and helping cover events and arrange the Web animation session. Thanks also to the subscriber who sent me to the conference, which was way out of my price range! All of these people are good and wonderful.</aside>

<figure>
    <img src="/img/2016/siggraph_disney.jpg" srcset="/img/2016/siggraph_disney-2x.jpg 2x" height="450" width="600" alt="At Disneyland: Rachel Nabors stands and points in front of a statue of Walt Disney, also pointing, with Mickey Mouse at his side.">
    <figcaption>
        No better way to end a series of posts about animation than with a picture of Walt Disney, taken at our mini post-SIGGRAPH adventure at Disneyland.
    </figcaption>
</figure>