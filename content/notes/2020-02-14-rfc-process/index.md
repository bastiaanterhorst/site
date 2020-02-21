---
title: 'Scaling inclusive decisions with RFCs'
slug: 'scaling-inclusive-decisions-rfcs'
date: 2020-02-14T9:27:37+01:00
draft: false
---

As engineering organisations grow beyond what would fit in a meeting room, it becomes harder to involve everyone in important decisions. A natural response to this is to impose strategic or process related decision top-down, and leave team-level decisions up to the teams to sort out, as long as they align with articulated strategy.

While this may work in authoritarian company cultures, I believe in fostering a culture of compassion, inclusion and transparency. A culture where leadership and teams share plans early, and proactively ask for feedback. A culture where people feel empowered to challenge proposals from peers and leadership alike, with the intent of making better decisions. 

I believe a key instrument in building such a culture is the _Request for Comments (RFC) Process_.

The idea is that whenever anyone wants to do something with significant impact on other people, systems or processes, they must write an RFC and actively solicit feedback from the entire engineering organisation, in public. In essence, RFCs represent the democratisation of ideas.

{{< wide-original-image rfc-slack-2 >}}
    Announcing a new RFC on Slack.
{{< /wide-original-image>}}

Over the years, at WeTransfer we have had RFCs to discuss system migrations, architectural design, test automation tooling, our incident response procedure, our approach to Open Source Software, and many more. It is a process that works for any proposal, large or small, and from pure engineering challenges to questions on process or culture.

The RFC process is not meant to replace existing organisational hierarchy or accountability. It is an instrument to improve decision making, and to foster transparency and inclusion. It does not mean _design by committee_. Everyone has a right to speak their mind, and the RFC author has an obligation to respond to all feedback that has been given. But in the end, the RFC author decides how the feedback that has been given will be incorporated. 

Like all innovation, writing an RFC is an act of vulnerability. Proposing changes publicly can feel daunting, especially for more junior people. This is why leadership has to show the way by actively submitting RFCs of their own, soliciting feedback from less senior people, and being receptive to that feedback. Leadership needs to create the psychological safety for anyone to feel comfortable to write an RFC. Beyond psychological safety, having a structured process is key to making RFCs succeed. A process provides clarity and fairness in terms of what to expect to both writers and commenters.

## The RFC process

I first implemented an RFC process at WeTransfer in 2017. Over the years, we have been making tweaks to the process. These are the essential components of our process:

**A single, stable, public location**<br>
There should be only one single location where RFCs are shared, and commenting should be integrated. The location should be public and easy to use for authors and commenters. Great locations are a company wiki or simply a Google Docs folder.

**A template to get people started**<br>
Help (potential) authors get started by providing a template with useful prompts. Our template asks authors to provide a summary, a motivation, the proposal itself, drawbacks of the proposal, alternatives to the proposed solution, an implementation plan, and finally a list of unanswered questions. Authors are free to pick and choose which sections they feel are helpful, depending on the nature of their RFC.

**A Communication plan**<br>
Create guidelines on where people must announce a new RFC, and don't let them get swept under the rug. Also encourage people to seek out advice from people who they suspect might have different opinions on the matter. At WeTransfer, we announce new RFCs in our ```#team-engineering``` Slack channel, as well as via an email list.

**A clear timeline**<br>
It is important to let people know how much time they have to provide feedback, so give each RFC a deadline. People should be able to request more time to provide feedback when they need it.

**An obligation to respond**<br>
While RFCs are not meant to water down opinions, it is crucial that authors take feedback serious. All feedback should be acknowledged, and when it is not incorporated, an explanation should be given. 

**Always a resolution**<br>
When the deadline for feedback has passed, and all commentary has been processed, always provide a clear resolution to the RFC, by marking (and announcing) it as accepted or rejected. People should feel comfortable rejecting their own RFCs if the feedback made them change their opinion.

**Keep the archive**<br>
It is helpful to keep historical RFCs around, while making it clear which ones were accepted and rejected. This is not a blame game, but rather to build up a trail of documented decisions that can provide valuable context in the future.

{{< wide-original-image rfc-list-2 >}}
    A snippet from our RFC archive.
{{< /wide-original-image>}}

## Implementing RFCs in your organisation

What better way to introduce RFCs in your organisation than with an RFC? This is how I first pitched RFCs at WeTransfer. After the initial implementation, let leadership (like engineering managers) take the lead by urging them to write RFCs. Actively solicit feedback from every layer in the organisation, and be diligent in responding to feedback. The first period is crucial to create a safe space for people of all ranks to voice their opinions.

Beyond the first period, it will take continuous effort to make (and keep) RFCs a part of your engineering culture. I believe this is more than worth it, and simply part of leadership's responsibility to create a safe space for ideas. I want to thank my teams for their willingness to share their ideas and critique those of others freely, with respect, and without reservation -- without them this entire exercise would be futile.

Over the years, the RFC process has brought us better knowledge sharing, increased involvement, more bottom-up initiatives, and more openness to change. I believe it is one of the cornerstones in creating a thriving and compassionate engineering organisation, and would recommend any team -- large or small -- to adopt it.