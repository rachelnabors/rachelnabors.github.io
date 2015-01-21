---
layout: post
title: "Physics and Web Animation"
excerpt: "As UI animation systems become more complex, it makes sense to want them to conform to a physics engine."
---
In [the first ever online Animation Hootenanny](https://www.youtube.com/watch?v=mn7BWXtDM2c), an audience member asked if physics engines would ever come to the browser. A physics engine is a concept you might know from game development. It’s a supreme formula that dictates how reactions occur, like how far an object bounces if your character throws it across the room. Such an engine would be useful for interpreting the momentum of a scroll or the bounce back of a failed drag and drop.

[Ralph Thomas](https://twitter.com/i_am_ralpht) wrote [a fantastic post](http://iamralpht.github.io/physics/) with demonstrations on applying physics to UI animations. [Research shows even infants have a deeply embedded concept of momentum](http://munews.missouri.edu/news-releases/2012/0124-babies-are-born-with-%E2%80%9Cintuitive-physics%E2%80%9D-knowledge-says-mu-researcher/) and other physical interactions. Naturally, accomodating and imitating that kind of real world physics may help humans of all ages use digital interfaces more intuitively. Sadly, a genuine physics engine isn’t likely to become a baked-in browser feature with an API just yet.

The framework [Famo.us](https://famo.us/) promises “the only JavaScript framework that includes an open source 3D layout engine fully integrated with __a 3D physics animation engine__ that can render to DOM, Canvas, or WebGL.” Those seeking a little less god-like authority over the laws of physics present in their infinite canvas may want to look into [Interact JS](http://interactjs.io/, a library offering drag and drop, resizing and multi-touch gestures with inertia and snapping for modern browsers, including IE 8+.

But I think the question is __how do we build physics into our own UI ecosystems?__ If we want all animations to conform to gravity and differing material weight? I’m curious to know if anyone’s had experience creating such a thing.