---
layout: post
title: Interaction design: Craft vs. UI
excerpt: "I've been to many conferences this summer, and I've gotten a lot of feedback from both designers and developers about some of the harsh realities of implementing the exciting new animations and interactions I talk about. I have some ideas for what needs to be done. What do you think?"
featured-image: ""
---

I've been traveling the conference circuit this summer, talking about New Wave interactions like [CSS3 animations](http://24ways.org/2012/flashless-animation/) and the [Web Audio API](http://www.html5rocks.com/en/tutorials/webaudio/intro/). One of my favorite things about this experience (aside from finally getting to travel to [different](http://2013.frontendconf.ch/speakers/#speaker-34) [countries](http://2013.fromthefront.it/)) is meeting people who have been trying to do the same things and seeing the different ways [they're solving some](http://www.greensock.com/) of the same problems. But some problems keep coming up during the <abbr title="Questions and Answers">Q and A</abbr> segment at the end of my talks:

> That looks complicated. Are there any tools that can help me, as someone who hasn't mastered CSS and JavaScript yet?

Yes, there are tools like [Adobe's Edge Animate](www.adobe.com/EdgeAnimate) and [Sencha's Animator](http://www.sencha.com/products/animator). And they are certainly useful. But the problem with using a proprietary visual interface while building these interactions if that you will always be limited to the state of the art its developers and maintainers choose to implement. For instance, I'm working on a project where I want to put a little [WebGL](http://www.chromeexperiments.com/webgl/) in, just for funnzies. If I used an animation program that didn't support webGL features, I would be less likely to imagine working outside its constraints, and even if I _did_ think outside my <abbr="User Interface">UI</abbr>, I would probably be unable to implement something so _avant garde_ and foreign _inside_ that user interface.

User interfaces, while they can free you up to do many things visually, also tie you down to their creators' methodologies, abilities, and ways of thinking. Right now we have so many exciting ways we can tell stories in the browser. It seems premature to adopt a program that takes away all that magic.

> I have a huge interaction I want to build, and I know how to sling code. But managing all these assets gets complicated very quickly. Isn't there a tool to keep them under control at least?

This is a reasonable complaint, a problem I have encountered on my own. While we do have tools like [Sass](http://sass-lang.com/) to help with managing lots of CSS, there are some tools that we don't have but desparately need: 

* A way to convert onion-skinned PSDs to sprite sheets
* A way to scrub through animations to check timing on longer sequences
* A plugin for Sass to handle animation timing (I'm working on this)
* Polyfills for browsers that don't support animations

(There _are_ more, and please feel free to respond with what would help you out!)

All of these tools could stand alone, working directly in your browser or from the command line. We wouldn't need to build the entire interaction in one program. Rather, could build it in the browser with several tools running alongside, depending on what we need for the situation.

I approve of this Tool Belt approach: It's lightweight, modular, and encourages people to learn more code than they would if it was all being written for them behind the scenes. It might even scale better for production environments with multiple teams! But it's not an out-of-the-box solution/empowerment for those with no code background.

## Working "blind"
Something I realized while speaking with designers after my talks: Every designer expects work they cannot do through a visual interface to be beyond their reach. And yet, learning those same interfaces takes as much effort and intellect as learning JavaScript or CSS. I know because I've learned _all of these things._ It's great that designers can layout a magazine on a screen today, but it wasn't always like this. In the days of the printing press, designers were more like mathematicians, laying out metal fonts along grids, mirror images of what was to be printed. It wasn't until they pressed ink to paper that they could see what they made. They were "designing blind" as we do today.

At first I thought, "Interaction should be like a craft, not something a <abbr title="What you see is what you get ">WYSIWYG</abbr> program delivers into your lap." Aren't we all crazy about "craftsmanship" these days? Craft beer, craft nights, [handcrafted goods](https://squareup.com/market). Why should code be any different? Get a text editor and put your fingers to work!

And this brings me to one final thought. At [Gotham JS's](http://www.gothamjs.com/) afterparty, I had a conversation with a young man which left me thinking. Right now, we don't have many of these Tools. Those that we have leave us "working blind." That is, we make a change, refresh the browser, wait to see the change, repeat. We have to do a lot of math and calculations by hand to get it right. Math and calculations are what computers are best at. And humans, especially the artists who have those Big Interaction Dreams, are great at visual and audio analysis. Wouldn't it be best if we could see _and_ hear those interactions while we build them? And that's where the Tool Belt approach fails. 

[Brett Victor gave a beautiful talk about working with code visually and seeing the result of that work immediately.](https://vimeo.com/36579366) It's hard for me to explain, so be sure to watch the talk. I feel like we need something like this in the Tool Belt to get those Big Dreamers in the field.

## Crafters of experiences
I do feel there is a place for a special breed of experience designer/developer in the web development ecosphere. I also strongly feel these people will come from unexpected places, places that have a pedigree for delighting people, like animation, cinema, comics. But in order to get their ideas, we have to make some accomodations:

1. **Solid onboarding to help people learn CSS and JavaScript quickly.** You shouldn't have to get a computer science degree to understand enough JS to build an interaction. It's not like this person is building the next jQuery. That designers are still struggling to learn JavaScript after so many years is a testament to our failure as teachers of absolute newbs with no programming background, not a testament to designers' learning abilities.
2. **Better tools for excited creators.** It behooves us as a development community to build the tools these creators need to work quickly and efficiently and better understand their code. The alternative is that we let privately owned companies with their own code standards empower these people to create according to a narrow definition of interactions.
3. **More collaboration.** I'd like to see more non-developers being dragged to hackathons. You _can_ get starving artists to come to an event with free beer an pizza. But you have to reach out to them, and you have to know how to talk to them (which is the topic of another post, but the gist is: ask to work on their ideas instead of your own&mdash;it'll be good for both of you).

These are just some ideas I had and some things I've observed. By no means am I proclaiming authority on this topic in such a slapdash post. But what I'm really curious about is what do the designers and developers think? Can we come together to build exciting things, or will we always need to look to so-called unicorns? Can and should we train people to work on these things by hand, or is it better to just let the programs do the work for us? Is it better to craft blindly or design visually?