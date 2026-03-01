export interface Newsletter {
  id: string;
  title: string;
  authors: string;
  date: string;
  edition: string;
  content?: string;
  comingSoon?: boolean;
  comingSoonDate?: string;
  substack?: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "trust-series-1",
    title: "The Rise of Impact Investment: What Does Trust Really Mean?",
    authors: "George Karani & Rosa Schmidt",
    date: "Aug 02, 2025",
    edition: "Edition 1 of 3, The Trust Series",
    substack:
      "https://21givenchy.substack.com/p/the-rise-of-impact-investment-what",
    content: `## Welcome.

This is the first edition of our limited 3-part series exploring the changing role of trust in the impact economy.

We've spent the last year talking to founders, investors, and community builders across Africa, Europe, and the Americas. What we kept hearing—whether in Nairobi boardrooms or Geneva conference halls—was the same quiet crisis: **nobody knows who to trust anymore.**

Not because people are dishonest. But because the systems we built trust on—credentials, institutions, track records—are buckling under the weight of a world that's changing faster than those systems can adapt.

So we asked: **What does trust actually mean in the impact economy of 2025?**

---

### The Old Architecture of Trust

For decades, impact investment ran on a simple trust architecture:

1. **Credentials** — Does this organization have the right certifications, audits, B-Corp status?
2. **Track record** — Have they delivered results before, validated by a third party?
3. **Institutional affiliation** — Are they backed by a name-brand fund, development bank, or foundation?

This worked—to a point. It created a filtered ecosystem where capital flowed to "safe" bets: organizations that could prove past performance, navigate complex compliance, and speak the language of institutional gatekeepers.

But here's the problem: **this architecture systematically excluded the most promising impact-driven work.**

The founder in Lagos who hasn't had a decade to build a track record. The cooperative in rural Kenya that doesn't have the resources for B-Corp certification. The community health worker network in Colombia that's producing extraordinary outcomes but can't articulate them in the language investors want.

**Trust, as traditionally constructed, became a barrier.**

---

### The Trust Paradox

Here's the paradox we've been sitting with:

The organizations most likely to create transformative impact are often the ones least able to prove trustworthiness through traditional metrics.

And the organizations most able to prove trustworthiness are often the ones least likely to take the risks necessary for transformative change.

This isn't a moral failure. It's a structural one.

The measurement frameworks, the due diligence processes, the reporting requirements—they were designed for a different era of philanthropy and impact investment. An era where "impact" meant incremental improvement to existing systems, not fundamental redesign.

---

### What Trust Actually Requires

After all our conversations, we've come to believe that **trust in the impact economy requires three things that our current systems struggle to provide:**

**1. Proximity**
Trust is built through relationship, not paperwork. The investors we spoke to who felt most confident in their decisions were the ones who had spent time in the communities they were investing in—not just reviewing reports, but understanding context.

**2. Transparency about uncertainty**
Paradoxically, organizations that admitted what they didn't know earned more trust than those who presented polished certainty. The impact space is complex. Outcomes are often unpredictable. Investors who understand this are looking for partners who can navigate uncertainty honestly, not organizations that promise more than they can deliver.

**3. Skin in the game**
The most trusted organizations had founders and teams whose own livelihoods, reputations, and futures were tied to the work. Not because personal investment is a perfect signal, but because it aligns incentives in ways that contractual obligations often don't.

---

### A New Architecture Is Emerging

We're seeing the early stages of a new trust architecture forming—one that's less dependent on credentials and more dependent on community validation, real-time transparency, and aligned incentives.

It looks like:
- **Community-validated impact claims** rather than third-party certified ones
- **Real-time data sharing** rather than annual reports
- **Network-based reputation** rather than institutional affiliation
- **Co-investment models** where communities have equity stakes, not just service relationships

This isn't fully formed yet. It's messy, experimental, and sometimes contradictory. But it's emerging.

---

### What This Means for You

Whether you're an investor, a founder, or someone building in the impact space:

**The question isn't whether to trust—it's what to build trust on.**

The old architecture gave us false certainty. The new architecture demands we get comfortable with a more honest kind of uncertainty—and build systems that make that uncertainty navigable rather than paralyzing.

In the next two editions of this series, we'll go deeper:
- **Edition 2**: Where will trust actually be built in 2030, and who gets to shape it?
- **Edition 3**: Impact Trends 2026—what's working, what's failing, and what's next

---

*Authors: George Karani & Rosa Schmidt*
*frontforumfocus — The OS for Founder Focus*`,
  },
  {
    id: "trust-series-2",
    title:
      "Where will trust actually be built in 2030 and who gets to shape it?",
    authors: "Rosa Schmidt & George Karani",
    date: "Feb 18, 2026",
    edition: "Edition 2 of 3, The Trust Series",
    substack: "https://21givenchy.substack.com",
    content: `## The Trust Infrastructure Question

In our first edition, we asked: *What does trust actually mean in the impact economy?*

The response was overwhelming. We heard from founders in Accra, investors in Amsterdam, and community builders in São Paulo—all wrestling with the same fundamental question: **if the old trust architecture is failing, what replaces it?**

This edition is our attempt to answer that.

---

### Where We Are Now: The Trust Gap

Let's be honest about the current moment.

The impact investment sector has grown dramatically over the past decade—from niche to mainstream, from billions to trillions under management. But this growth has come with a shadow: **impact washing.**

Not always intentional. Not always malicious. But pervasive.

The systems we built to prevent it—ESG ratings, SDG alignment frameworks, third-party audits—have proven to be better at creating the appearance of accountability than the substance of it.

The result is a trust gap. A growing skepticism, among communities, among practitioners, and increasingly among investors themselves, that the capital flowing into "impact" is actually producing it.

**This gap is not a bug. It's a structural feature of systems that were never designed for what we're now asking them to do.**

---

### Three Scenarios for Trust in 2030

We've been modeling three possible futures. None of them are inevitable. All of them are possible.

**Scenario 1: The Credentialing Arms Race**

In this scenario, the response to the trust gap is more credentialing. More sophisticated ESG ratings. More complex impact measurement frameworks. More third-party verification.

The problem: **credentialing scales to the credentialers, not to the impact.**

The organizations best positioned to navigate increasingly complex compliance requirements are the ones with the resources to do so—which systematically advantages larger, more established organizations over smaller, more innovative ones.

This scenario produces incremental improvement in measurement sophistication while entrenching the structural inequalities that prevent transformative change.

**Scenario 2: The Blockchain Transparency Utopia**

In this scenario, technology solves the trust problem. On-chain impact verification. Smart contracts that release capital only when pre-defined outcomes are met. Real-time transparency dashboards visible to all stakeholders.

We're skeptical—not because the technology isn't promising, but because **trust is fundamentally a human problem, not an information problem.**

The gap isn't that investors don't have enough data. It's that they don't have the relationships, context, and judgment to interpret data meaningfully. More information, absent the human infrastructure to make sense of it, produces more noise, not more trust.

**Scenario 3: The Community Trust Stack**

This is the scenario we think is both most likely and most desirable.

In this scenario, trust is rebuilt from the bottom up—starting with communities, not institutions. It looks like:

- **Local validation networks** where community members, not external auditors, vouch for impact claims
- **Participatory governance** where the people affected by investments have real voice in how they're structured
- **Relationship-based due diligence** where investors spend time in communities before committing capital
- **Networked reputation systems** where trust signals travel through relationship networks, not credential databases

---

### Who Gets to Shape It?

Here's the question we can't avoid: **who has power in this transition?**

The new trust architecture won't emerge neutrally. It will be shaped by the people and organizations with the resources, platforms, and networks to build it.

Right now, that's mostly still the same institutions that built the old architecture—the major impact funds, the development banks, the large international NGOs.

They're not all bad actors. Many are genuinely trying to do better. But they have structural incentives to preserve elements of the existing architecture that benefit them.

**The countervailing force is the community-led organizations, local investors, and grassroots movements who are building new trust infrastructure from the margins.**

They're doing it out of necessity—because the existing architecture doesn't serve them. And in that necessity, they're building something that may ultimately be more durable and more legitimate than anything the institutions are designing.

---

### What We're Watching

Some specific developments we think are worth tracking:

**Community foundations with participatory grantmaking** — Moving decision-making power closer to affected communities. Still early, still messy, but showing real promise.

**Indigenous-led investment funds** — Built on relationships and cultural accountability structures that predate and will outlast our current ESG frameworks.

**Diaspora investment networks** — Leveraging trust built through shared cultural and family connections to direct capital to underserved markets.

**Peer accountability circles** — Small groups of founders holding each other accountable to impact commitments, outside formal institutional structures.

---

### The Question for You

If the new trust architecture is going to be built by communities, from the bottom up—what role do *you* play?

Are you in a position to shift resources, attention, or platform toward the organizations building it? To invest in the relationships that make community-based trust possible? To advocate within your institution for the structural changes that would let this new architecture take root?

These aren't rhetorical questions. They're the ones that will determine which scenario we actually end up in.

---

In our final edition, we'll lay out the specific Impact Trends we're watching for 2026—the organizations, models, and ideas that we think are building toward a more trustworthy impact economy.

---

*Authors: Rosa Schmidt & George Karani*
*frontforumfocus — The OS for Founder Focus*`,
  },
  {
    id: "trust-series-3",
    title: "Impact Trends 2026",
    authors: "George Karani & Rosa Schmidt",
    date: "Coming April 2026",
    edition: "Edition 3 of 3, The Trust Series",
    comingSoon: true,
    comingSoonDate: "April 2026",
  },
];

export interface PodcastEpisode {
  id: string;
  title: string;
  youtubeId: string;
  description?: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep1",
    title: "Dropout: Building the Future of Learning with Leeland Zhang",
    youtubeId: "USR50RCZXXM",
    description:
      "Leeland shares how Dropout is reimagining education for the next generation. We explore the tension between access, quality, and sustainability—and how to build at the intersection of all three.",
  },
  {
    id: "ep2",
    title: "Building Global Learning Communities with Aryan Marxaney",
    youtubeId: "uuwZycpdkfQ",
    description:
      "How do you build learning experiences that work across different geographies, languages, and contexts? Aryan discusses the infrastructure needed to scale community-driven impact globally.",
  },
  {
    id: "ep3",
    title:
      "The Awari Collective: Redefining Global Philanthropy with Elena",
    youtubeId: "zexxrV4c9wY",
    description:
      "Elena shares the journey of Awari Collective—a pioneering force in redefining how philanthropy works globally. From Geneva to Nigeria, discover how they're building trust and empowering communities.",
  },
  {
    id: "ep4",
    title:
      "15 Year Old AI Prodigy Breaks Down the Future of Artificial Intelligence",
    youtubeId: "-BCzAIEDlUc",
    description:
      "Meet Ian Patel, a 15-year-old tech visionary who's already founded 5 companies, invented groundbreaking emotional AI tech, and completed 35 projects in just one year.",
  },
  {
    id: "ep5",
    title: "Bridging the digital divide in education through AI",
    youtubeId: "bc_Ty2fGb2I",
    description:
      "Join us as we explore the transformative power of AI in Africa with Dev Aditya, a London-based AI expert and the visionary behind the world's first Digital Human AI teacher, OIAI. Dev has dedicated his career to a mission of upskilling 750 million learners globally by 2030.",
  },
  {
    id: "ep6",
    title:
      "George Karani and Alex Schwarzkopf Venture Partner at 1517 fund",
    youtubeId: "PZoz8zfmhq0",
    description:
      "Sit down to talk about his journey from founder to VC as part of SG kabarak founder series aiming to highlight the startup ecosystem in Africa covering topics like Fundraising, GTM strategies, tech optimization etc.",
  },
  {
    id: "ep7",
    title: "How AI is Revolutionizing Wearables | Austin Mejia Interview",
    youtubeId: "KpxbgsBP4Ok",
    description:
      "In this episode, we sit down with Austin Mejia, Product Manager for the Google Pixel Watch, to discuss how AI is shaping the future of wearable technology. From health monitoring to personalized experiences, we explore the latest innovations and what's next for wearables.",
  },
  {
    id: "ep8",
    title: "Fundraising in Africa's Digital Age with Kris Jones",
    youtubeId: "CexI7yTq4gE",
    description:
      "Kris Jones, co-founder of MagicSauce.online, dropped insights at our How To Fundraise Series with SG Kabarak. Unlock the secrets to successful fundraising with SG Kabarak's How To Series!",
  },
  {
    id: "ep9",
    title:
      "Why Sustainability Will Change Everything | Mats Larsson Reveals the Truth",
    youtubeId: "CDdree8PcIE",
    description:
      "A deep dive into the future of energy transformation and sustainability with a true visionary in the field. My guest, Mats Larsson, is the founder of the Global Energy Transformation Institute, or GETI.",
  },
  {
    id: "ep10",
    title: "Join Tia Cristy and George Karani",
    youtubeId: "LdZGwKO3V9U",
    description:
      "Explore how communication isn't just about speaking—it's about activating change. In this podcast, we dive into Tia Cristy's Journey and inspiration for impact through tipsfromtia.com.",
  },
  {
    id: "ep11",
    title: "The revolution continues!",
    youtubeId: "9on68c_h0xU",
    description:
      "In our podcast with Victor we dive deeper into the future of Kenya's Media Industry and how it is transforming lives.",
  },
  {
    id: "ep12",
    title: "Is OpenBCI the Key to Brain Control?",
    youtubeId: "f45WZp-gkT0",
  },
  {
    id: "ep13",
    title: "Mindset and the Evolution of Modern Hip-Hop",
    youtubeId: "Cuk5jiXyQsc",
  },
];
