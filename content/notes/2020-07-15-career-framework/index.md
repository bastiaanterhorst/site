---
title: 'Implementing an Engineering Career Framework'
slug: 'engineering-career-framework'
date: 2020-07-15T9:27:37+01:00
draft: false
---

When I joined WeTransfer we were 7 engineers in a tiny office. Fast forward 5 years to today where we are 60 engineers across many teams, products and locations. Somewhere between these two states, the engineering organisation began needing a career framework. 

In the early stages of a company, one often is in *hustling mode*, doing whatever needs doing at that moment to get the latest product release out, or fight whatever fire needs fighting on that day. This is an era of generalists with a strong bias for getting shit done. It is a time of company soul-searching, constant change, and extreme adaptation where setting out a career plan would probably be fooling oneself. 

When companies grow and their mission solidifies, teams expand and people will be asked to specialise more. In that situation it is incredibly valuable to have a tool that allows managers to articulate both where someone is in their career, and how they see themselves progressing. A framework is important for mentoring and retaining existing staff, where it enables candid conversations about areas of growth. It also ensures that managers across the company are coaching their people towards a common understanding of what seniority means. Finally such a framework is equally valuable in recruitment: having a shared vocabulary that describes seniority allows teams to clearly articulate their staffing needs, and to adapt their interviewing process to this.

At WeTransfer we just finished rolling out our first engineering career framework. Even though it is still very new, having a shared vocabulary is already proving valuable. The process of creating a career framework was complex but very rewarding. I hope that sharing our process, struggles and learnings will help others who are considering creating a career framework. To ensure that this does not stop at a purely theoretical explanation, we are also making our career framework itself available under an Open Source license.

Our framework is published on [our internal Notion wiki](https://www.notion.so/wetransfer/Product-Engineering-Career-Framework-b843ab7c7b574960adc7583d56fd0dad).

If you have feedback or questions about the framework, please reach out via the [Github page](https://github.com/WeTransfer/product-engineering-career-framework) we created for this purpose. 

## The process

The process of implementing a career framework in an existing organisation is a hairy one. We are talking about something extremely sensitive: people's competencies and how those translate to a (possibly externally visible) seniority level. Furthermore, applying such a framework impacts every single engineer in the organisation. We needed to make sure we approached the initiative with the proper care and respect for everyone involved.

## 1. Getting started

The first step was to form a team that could represent both our existing engineering organisation but also take a step back and formulate the bar we want to aspire to. In our case, the team was 4 people: one individual contributor, two managers and myself. Two people with long tenure in the company, and two more recent joiner. Everyone in the group had been working in engineering for over 5 years. 

Luckily, there was no need to start completely from scratch. There is a wealth of information available on career frameworks that we could readily draw from. These were the resources we found most valuable:

- [Progression at Monzo](https://progression.monzo.com)
- [Engineering Career Development at Etsy](https://codeascraft.com/2019/10/02/engineering-career-development-at-etsy/)
- [Building a technical career path at Spotify](https://labs.spotify.com/2016/02/08/technical-career-path/)
- [Engineering Career Development at Gitlab](https://about.gitlab.com/handbook/engineering/career-development/)
- [We got career progression wrong. At CharlyHR](https://www.charliehr.com/blog/career-progression-framework-why-2/)
- [Why we re-designed our engineering career framework at CircleCI](https://circleci.com/blog/why-we-re-designed-our-engineering-career-paths-at-circleci/)
- [One Rubric Changed Box' Engineering Performance](https://firstround.com/review/one-rubric-changed-boxs-engineering-performance-heres-how/)

## 2. Writing

Before we could start writing, we needed to align on what we felt were important qualities of a career framework. Everyone has their own biases and it is important to try and get these on the table. In a sense, you are discussing where your organisation is now, and where you want your organisation to grow. In our case, we wanted to emphasise rigor, collaboration and a high bar for quality as these are our most important areas for growth as an organisation. We also wanted a clear path of growth for individual contributors to levels that match management levels; you shouldn't need to become a manager to continue to grow.

Additionally, companies often have vision and value statements that can guide some of this work and determine which competencies need emphasis. In our case, inclusivity is an important value and something we felt had to be reflected in the framework.

Our framework identifies the following areas of competency for individual contributors:

- Architecture
- Code
- Collaboration
- Community
- Delivery
- Hiring
- Leadership
- Operations
- Security
- Usability

And the following areas of competency for engineering managers:

- Leadership
- Team building
- Coaching
- Technical excellence
- Delivery

To give people enough room for growth, we defined 8 levels for individual contributors, from intern to principal engineer. For managers, we defined 5 levels, from Engineering Manager 1 to CTO.

The writing itself was done in numerous iterations. Beyond the writing itself, we experimented with different ways to present the framework. From excel sheets, to exported PDFs, to a separate website. We wanted the framework to be easily discoverable to engineers in the company, easy to digest, and also easy to maintain. In the end we settled on Notion, our internal wiki. Notion offers a good interface to the framework, and is a tool we already use every day to share information internally.

When we had a first feature-complete draft we decided to expand beyond our initial group and get broader feedback. 

## 3. Alignment & approval

We shared our first draft of the framework with a broader set of engineers, our HR team, and our Works Council. We then worked to tweak the framework based on their feedback. Sharing our draft early helped us figure out where the holes were in our framework, and where some of the sensitivities lie with introducing a framework like this.

The next step was an RFC towards the entire engineering organisation. We've worked hard to build an RFC-culture where all important changes are proposed as request-for-comments. All engineers had 2 weeks to provide their feedback to the framework, and the proposed method of implementation. We again took that feedback to improve the framework. The added benefit of sharing this freely and upfront was that engineers had some time to get comfortable with the levelling process that was coming.

The final step was to get formal approval from the Works Council. The majority of our engineers is based in The Netherlands, and important changes impacting these employees must legally be approved by the Works Council first. 

## 4. Initial levelling

When the framework was approved and published on our internal wiki, the last crucial step was to apply it to all current staff.

We realised this was probably the most controversial part of implementing the framework, and one that we really needed to get right. We wanted people to feel valued, but we also wanted to set a high bar. We wanted to steer towards a set of competencies we felt WeTransfer needs for its next stage of growth, with a strong emphasis on collaboration and quality.

We needed to level about 60 engineers across a handful of managers and a few different locations. To minimise bias and ensure that the framework was applied consistently across all managers and their reports, we created a Levelling Committee. 

Our levelling committee consists of the CTO, two of our most senior engineering managers, and a representative from HR. This small group oversees the initial levelling as well as future promotions in the framework. 

To calibrate our levelling, we organised a session with all managers to align on our interpretation of the levels and competencies. Then each manager levelled their reports, and provided the levels to the Levelling Committee. The levelling committee then went back and forth between managers to iron out inconsistencies and ensure a fair and balanced application of the framework. We took extra care with the lowest and highest levels in the framework, as these calibrate how the framework is applied; our rationale was that if we got these right the middle would be easier. 

If this sounds like a lot of work: it was. But it was an important step to getting it right. We want this framework to inspire people to grow further, instead of leaving them feeling misunderstood and undervalued. We wanted to make sure we were diligent and had a solid narrative to back up each and every levelling.

Inevitably an initial levelling will reveal some discrepancies in salary within a certain level. While we worked on the career framework our HR team conducted a salary benchmark and we were able to project their results onto the framework to give us a salary band for each level in our framework. This helped us identify pay gaps that we could then address (and also showed us where people were either overpaid or under appreciated).

## 5. Living the framework

After the initial levelling managers communicated all levels to their reports. At this moment we do not internally disclose the levels everyone is on, as we felt that would be too much change in one go. 

As these things go, the work of creating a career framework  inspired a few follow up initiatives that are either planned or already underway: embedding the career framework in how we do performance management, and having the framework inform our recruitment proces are the two most important ones.

Soon after finishing the framework we decided this work needed to become public. We were able to produce our framework in a relatively short time because of the material that was available online, and we felt it our duty to give back what we had learned as well. We hope that publishing our process and final framework will inspire others to create frameworks of their own, and follow through when the going gets tough.

