---
layout: post
title: "Accessibility vs User Experience: 60 FPS, Flipboard, and the High Road to the GPU"
excerpt: "Ever since that post detailing how Flipboard creates an imaginary DOM in Canvas, people have been voicing concerns over whether or not the pursuit of jank elimination has come at the cost of accessibility."
---
Canvas is little more than a glorified image tag, a sandbox for art. While immensely useful for dynamic animations you see in visualizations and games, it’s not accessible at all. It’s a pile of pixels, a locked box without any DOM for screen readers to walk. On February 10th, Michael Johnston posted [60 FPS on the Mobile Web](http://engineering.flipboard.com/2015/02/mobile-web/) which detailed how Flipboard’s mobile site uses Canvas and React.js to overcome jank. Of course, in overcoming jank, accessibility was thrown out the window, leading to much hue and cry.

__TLDR__ Has the pursuit of jank elimination has come at the cost of accessibility? Yes, for now, but in the end we will look back on these techniques as hacks to get around subpar browser rendering performance.

## User Experience over Accessibility?

For the past week I’ve been hearing concerns from many places on Twitter. I also happened to have interviewed _a lot_ of interaction developers for writing [State of the Animation](http://www.smashingmagazine.com/2014/11/18/the-state-of-animation-2014/). So I have a pretty good perspective on both sides of the equation.

Before I address some of these concerns, I want to make two things abundantly clear:

1. Animation, when responsibly incorporated into a user interface, provides a substantially better user experience over its immobile, jump-cut happy counterpart. But in order to get that usability boost, those animations have got to be smooth as butter. One day I will write a post about it.

2. Flipboard runs on React, and it _is_ accessible to Voice Over. React renders the content into the canvas (the block of pixels with no accessibility value) while also putting together a sort of mirror of the content into an invisible DOM that follows along with user’s scrolling and interaction so it’s still in synch for Voice Over. It’s a very complex system designed to deliver the same content to both users. Is it a perfect system that will work everywhere for everyone? No. Some users will fall through the cracks.

### Sacrificing accessibility for getting rid of jank? What were they thinking?

They were thinking about the users. Jank is a really nasty UX problem. It can cause headaches, disorientation, and lamentations of, “Mom, I think it’s broken.” So the Flipboard team had these three choices:

1. Build an accessible and performant mobile site that looks much like other sites. Deliver a ho-hum but serviceable experience for everyone that doesn’t push the envelope but suffices.
2. Build a site that pushes the boundaries of what is possible but performs so badly that people have terrible user experiences. (But it’s still accessible, so at least one group of people is having a good experience ;) )
3. Build a site that pushes the boundaries of what is possible to deliver a unique, useful, and delightful user experience to a large group of people while a smaller group of people have a less than stellar experience.

Maybe most of us would have gone with the first option. Some people may even think that the Flipboard team was being a show off by going with number three. But I’m sure system fonts and tables would still be the norm if it weren’t for people in their niches determined to do right by those niches. (Isn’t good typography just designers showing off, after all? _No it isn’t._) These people wanted to do right by motion design and give the best visual experience they could. They just couldn’t “have it all” as it were, not just yet. (Feel free to skip to the end for the big reveal.)

### I would understand if it were a game or an interactive story, but…

Hey, don’t give games and stories a free pass here! Many aren’t made with accessibility in mind. You have to be a certain kind of user to play most games: sighted and able-bodied (preferably with some digits to press some buttons or tap a screen). Flipboard is very sight-based: big glossy images that require nice fat bandwidths to download. This thing is built for a very specific kind of user the way Tomb Raider is built for a specific kind of user.

While seeing is part of many kinds of game play, not all games and certainly not all interactive stories are 100% sight based. I’m working on a Tamagotchi emulator project right now and aim to have it work with assistive technology. It can be done with the right mechanics on the right projects, but someone working with Unity might blow through the whole development cycle without a second thought to how the game plays with your eyes closed and voice commands. This is the right time to discuss the feasibility of accessibility in these places as well, so let’s not dodge it.

### What if this starts to be a thing? What if interaction developers start reconstructing the DOM in Canvas to take advantage of hardware acceleration?

You’re not going to like this, but Flipboard isn't doing anything new. In many browsers, Canvas is the high road to the GPU. A good deal of the AWWWards winners and interaction agencies out there do this. Flipboard’s devs are just the first to detail _why_ and _how_ publicly. And it’s a good thing, too. It got everyone buzzing about some very real performance and accessibility issues which would never be championed at interaction agencies where these things are being built all the time (_without_ the benefit of React’s mirror DOM).

### The DOM is slow. We should throw it away and start over.

That’s like throwing out two decades worth of relationship because your significant other doesn’t want to go bungee jumping with you. The DOM can be made to run faster. It’s not like we’ve hit Peak DOM Rendering Performance or something. In fact, I suspect one reason Canvas is the weapon of choice right now is that it got early performance support from Internet Explorer in a wise bid for HTML game developers’ favor. At Chrome Dev Summit this year (thanks for the early invite, whoever was responsible), Google revealed a goal to make 60 FPS a reality on Chrome’s mobile version across the board through various improvements including hardware accelerated rasterization (rasterization being a part of the rendering process), aka [Project Ganesh](http://www.androidpolice.com/2014/11/19/project-ganesh-demoed-at-chrome-dev-summit-makes-chromes-page-rendering-a-lot-faster-by-working-directly-on-the-gpu/).

## Growing Pains

In the beginning, not much moved visually in browsers. Well, aside from scrolling. Scrolling was movement. And the odd blink tag or animated GIF. But generally movement was handled by Flash and sometimes Java. Browsers grew up rendering a largely static DOM. And after a brief respite after the evaporation of Flash, now things are starting to move again, faster and faster. Browsers are racing to keep up.

If browser developers live up to their promises of increased rendering performance (and to be sure they will have to), I predict we will look back on these antics as a series of hacks used to take advantage of the more optimized parts of browser’s rendering capabilities. When the rest of browser catches up, less complex methodologies will prevail.

Believe it or not, what Flipboard’s team did helped the web, and so did the conversation surrounding it. It further showed to browser developers that web designers and developers will keep pushing what is possible in the pursuit of taking the web to the next level. Creativity finds a way.

We are right to demand that we can properly animate the DOM without causing jank. We can’t ask web design to stop dead in its tracks while browsers debate how to prioritize rendering performance.

The future of the web is in motion.