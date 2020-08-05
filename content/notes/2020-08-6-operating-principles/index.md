---
title: 'Influencing engineering culture with operating principles'
slug: 'influencing-culture-operating-principles'
date: 2020-08-04T9:27:37+01:00
draft: false
---

Teams benefit from Operating Principles; a set of guidelines that describe how the team – and the individuals in it – behave. They can articulate tacit agreements and latent behaviour in ways that makes them crisp and easy to understand to newcomers. It also makes it easier to steer behaviour when needed; they can provide a cultural dot on the horizon that a team can work towards. 

At WeTransfer, I drafted a first set of Engineering Operating Principles back in 2017. It was a tumultuous time in the company, with the growing pains that come with quickly scaling a company and transitioning from a start-up to a more established company. This first set of principles was created simply by getting into a room with all engineers (back then that was possible!) and talking about what we felt was important for the success of us all.

Now it is 2020, and WeTransfer is a different company. Our culture has crystallised and we have a set of company values that are independent of the 2017 Operating Principles. The majority of the current engineering team was not around in 2017, and as a result those old Operating Principles represent a different mindset and different organisational needs for a company in a different phase. It was clear it was time for a refresh.

{{< wide-original-image wt-values >}}
    WeTransfer company values.
{{< /wide-original-image>}}


For these new principles to truly reflect the current (and future desired) engineering organisation, creating them bottom up was crucial. Of course they can be steered based on company strategy, company values, and desired culture, but creating them in isolation is a guarantee they will not be practiced. It is key to co-create these with the people who will be asked to uphold them. 

I organised workshops in our two main engineering hubs: Amsterdam and New York City. These workshops explained the purpose and value of Operating Principles and included exercises to tease out how people thought about desired and undesired behaviours, specifically in the context of an engineering organisation. I included examples of some wildly different sets of Operating Principles, to show how these can be used for very different goals; contrast the [10 principles of Burning Man](https://burningman.org/culture/philosophical-center/10-principles/) with Amazon's [Leadership Principles](https://www.amazon.jobs/en/principles), for example. 

Beyond getting bottom-up input, these workshops also helped me understand how aligned the engineering organisation was with my idea of our desired engineering culture. My main gripe with the old set of principles was that they did not put enough emphasis on work for our customers, and always putting them first. It also did not include enough emphasis on team, and that we should all prioritise team success over individual success. Most of the shortcomings I saw also came up in the workshops, which was a good confirmation that this work was relevant

{{< wide-original-image ams-workshop-b >}}
    A snapshot of the Amsterdam workshop.
{{< /wide-original-image>}}

After the workshops I gathered all the input, and created clusters around topics. Across both locations, the most important clusters were around **Ambition & Growth Mindset**, **Effectiveness**, **Accountability**, and **Empathy, Trust & Camaraderie**. Within these clusters was invaluable information about how the organisation understood them. When looking at the information in these clusters, I also superimposed the company values on them. Our company values provide a great foundation, but they are pretty abstract. Utilising them as a way to structure our Operating Principles makes them more practical, and also ties the Operating Principles back to a recognisable structure that is shared across the company. 

The combination of company values, strategic direction, my own thoughts on our desired culture, and bottom up input from across the engineering organisation gave me enough data to begin writing. I shared a first draft with a small pre-reading group representing a broad range of people from different backgrounds, teams and locations. After getting their feedback and tweaking the OPs, I wrote an [RFC]({{< ref "2020-02-14-rfc-process" >}}) proposing the Operating Principles to the entire engineering organisation. More feedback was provided, and more edits were made. This process of writing and re-writing is crucial to ensuring the thoughts that were articulated in the workshops are interpreted correctly, and also to ensure this is truly a co-created document.

When the RFC was finalised and the new operating principles were officially introduced, I asked everyone to sign them as a token of support to their fellow engineers. My idea was that asking people to put their name under a document will make it carry a bit more weight. We also made reading and signing the operating principles part of our engineering onboarding process. In the end, I want people to take these principles seriously and to make them an integral part of our engineering culture. Embedding them into onboarding to make sure each and every new hire encounters them, and asking all existing engineers to formally sign up to them are the first steps in that direction.

In order for these principles to remain relevant, they will need to continue to adapt with the organisation. They should continue to both reflect the organisation's cultural norms, as well as steer these towards where we want these to develop. As the Dutch painter Willem de Kooning put it: *I have to change, to stay the same*.

These are WeTransfer's Engineering Operating Principles at the time of writing:

> ## WeTransfer Engineering Operating Principles

> **We Enable**

> **At WeTransfer we collectively work to enable our customers ability to cultivate and express their ideas.** As engineers, we have an immediate relationship with our customers through the code that powers our products. This comes with a substantial responsibility; when we mess up, our customers suffer immediately. It also comes with immediate reward when we empower our customers to do things they could not do before.

> All of our code, commit messages, pull requests, sprint planning sessions, bug reports, tickets, metrics, discussions, documentation, etcetera are worth less if we do not make our customers successful. Without them, we would not be here. Their success is our success. Our customer support team is an important conduit for customer sentiment and we treat them as such.

> Doing what is right for the customer (and this includes internal customers) is generally the hard thing to do. It requires us to listen, be ambitious and have discipline. For work as complex as software engineering, planning is essential. So we break things down into smaller chunks to make our goals manageable, and document these goals and plans rigorously. Then we iterate.

> Iterating means making decisions: quick, smart and brave. Quick to keep momentum and keep delivering value. Smart to continually improve the quality of our products and anticipate the needs of our customers. Brave to take calculated risks which raise the bar and help us venture into unknown territory.

> Decisions are at the core of our ability to be effective since they create clarity, which in turn paves the way for us to do the work which we believe will create value. Being effective is also a crucial ingredient to enjoying your work, and reducing stress. We continuously strive to be effective and help those around us do the same. 

> When making decisions, perfect is the enemy of good. We strive for quality, but prioritise velocity over perfection. The Romans had a name for this: *Festina lente*. Rationale behind decisions should be shared widely and proactively, and RFCs are a wonderful vehicle for this. We avoid indecision at all cost since stalemate is the very worst thing we can do to our customers, our teams, and ourselves.

> **We all own it**

> **Work at WeTransfer is team-centric.** We are an ambitious bunch: for many of us this work turned a passion into a profession, and we strive for greatness. However, where our hobby projects were often an individual affair, at WeTransfer we have the benefit of a much larger team to increase our leverage. Use this leverage: don't go it alone.

> The *10x developer* is a myth. Instead of individual success we optimise for team success and building *10x teams*. Team success is less fragile and increases our leverage. Shared success creates a culture of support, shared learning and collective ambition.

> To foster 10x teams, we emphasise cultivating a safe space as a foundation for personal growth, innovation, collaboration and high performance. 

> A safe space starts with respect and empathy for each other. Document your changes so your team knows what you're up to. Take the time to explain the *why* behind your thoughts and actions. Proactively help out with PRs. When you see friction or unclarity arising, take the initiative to dispel it. Owning your (in)actions is the foundation for accountability.

> **We keep ourselves accountable, which in turn allows us to keep others accountable as well.** Accountability means owning your decisions and results, and being upfront about both. It means asking kind, clarifying and thought-provoking questions. It means trusting an expert in their domain. It means refactoring messy code when you come across it, whether you wrote it or not. It means making whatever you did easier for the person that comes after you, because we all know writing greenfield code is rare. It means doing what would make your team look good, over what would make you look good. It means helping a colleague who you see is struggling. It means treating production with the respect it deserves. It means calling bullshit when you see it (loud and clear), also when the bullshit comes from higher up. Taking on accountability also means working in the open and making it easy for anyone to see what you are working on, how far along that work is, and why it is important (now).

> We [organise](https://www.thoughtworks.com/radar/techniques/inverse-conway-maneuver) our teams to promote creating small self-contained services. But just like these services need clear APIs and documentation in order to be discovered and used, human teams also need their interfaces to be clearly defined and well documented. Be proactively open and transparent about your processes and your work, so you welcome others to engage with you and your team.

> **We're optimistic**

> **We respect our peers to cultivate a space for vulnerability, so we can all innovate.** Even though we've outgrown being a start-up, *we are just getting started*. The growth of our company, our products, and ourselves will come from an enduring desire to do relevant work. With growth of any kind comes ambiguity, as we explore the unknown. We welcome this ambiguity as a challenge and do not excuse ourselves from it: we work through it and break complexity down into manageable chunks. This is innovation in action.

> Innovation is an act of vulnerability, because you're straying from the paved path and people only do so in a trusting environment. Trust absorbs fear of failure. Make an effort to trust those around you – and yourself. 'Making an effort' means being kind, giving *[plussing feedback](https://intenseminimalism.com/2015/pixars-plussing-technique-of-giving-feedback/)*, being humble and making a conscious effort towards nonviolent communication. These actions breed trust, and give others the implicit permission to innovate. 

> **We do not blame.** When things go wrong – *severe outage* wrong – you immediately come forward and disclose what happened. You do this knowing that you will not be blamed for honest mistakes. Instead we will all do what we can to help out and ask "how can we prevent this in the future?" and "could it have been worse?". We take our responsibility to learn from incidents, bugs and other mistakes, but also recognise they are part of life and essential to help us grow.

> A no-blame culture cultivates a place for people to take calculated risks. Combined with innovation, risk-taking is what raises the bar, fuels our ambition and propels us forward.

> **We're inclusive**

> **We seek to understand, before seeking to be understood.** People are unique, and we celebrate this uniqueness in our products and teams. We recognise that engineers work in different ways. Some are more vocal and others more introspective. We encourage participation in whatever form it may take and value contributions equally. Smart people don't assume they know better, but instead are curious to understand other people's perspectives and learn from them, also when they are less senior or non-engineers. 

> Our products are inclusive and seek to balance business gain with catering to a wide audience. We consciously explore the unintended consequences of our decisions before we finalise them. Through the code we write we have the ability to affect millions of people in both good and bad ways. We all should recognise that this is great power that comes with great responsibility.

> **We leverage diversity to make our teams stronger and our decisions better.** When hiring we actively seek to diversify our teams across gender, ethnicity, background, and more. We invite differing opinions into conversations to build a stronger and well-rounded perspective, and we engage in debates with optimism and flexibility. It is part of our growth-mindset to actively look for the fallacies in our own convictions.

> The ways in which we work are as diverse as our teams are, and we cater to this by building a remote-first culture. We optimise for the person not in the room (or office) by documenting our meetings, decisions and work progress. Informal chats are fine, but should be followed up on in the appropriate documents. We want our practices to be remote-first to give us flexibility. The flexibility to effectively work from our offices, our homes, or a hammock. The flexibility to start before the sun comes up, or work late into the night. We all need different things to be at our best, and adopting remote first practices enables that.

> We recognise that asynchronous communication lacks fidelity and adapt our communication accordingly. Jokes and particularly sarcasm are incredibly difficult to convey in writing, and can easily be misinterpreted. Always prioritise functional communication and respect over slipping in a cheeky remark.

> **Vulnerability is the ultimate power.** Be vulnerable so others can do the same. Get to know your peers and let them get to know you. We are all in this together.

> Let's make magic.