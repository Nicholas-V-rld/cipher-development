export type CaseStudy = {
  slug: string;
  index: string;
  label: string;
  title: string;
  summary: string;
  metric: string;
  className: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  headline: string;
  context: string;
  challenge: string;
  solution: string;
  shipped: string[];
  evidence: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "aac-story-builder",
    index: "01",
    label: "Accessibility · Custom AI product",
    title: "AAC Story Builder",
    summary: "A personalized story-making tool designed around one non-speaking child’s AAC vocabulary and device navigation.",
    metric: "HUMAN-CENTRED",
    className: "project-warm",
    image: "/work/aac-story-builder.png",
    imageAlt: "AAC Story Builder interface with story controls and a saved-story library",
    liveUrl: "https://www.aacstorybuilder.com/",
    headline: "Making familiar stories usable for a child who communicates differently.",
    context: "A mother approached Cipher looking for a practical way to support her autistic, non-speaking son. He communicates with an AAC device using LAMP vocabulary, so generic story generators could introduce words or navigation patterns that did not match the way he communicates.",
    challenge: "The product needed to turn everyday ideas into engaging stories without leaving the child’s established vocabulary system. It also had to help an adult understand the exact sequence of taps used to reach each word on his device.",
    solution: "Cipher built a focused web application that creates small picture books from a simple prompt while constraining the language to the child’s LAMP vocabulary. Words remain primary; optional illustrations make the stories more inviting without replacing the communication structure.",
    shipped: [
      "Prompt-based stories across familiar topics such as food, sport, nature and social situations",
      "Vocabulary-aware generation with exact device tap sequences for every word",
      "Controls for plurals, phrase shortcuts and story length",
      "Selectable illustration quality and a reusable saved-story library",
      "Story log, word-list and picture-gallery views for continued use",
    ],
    evidence: [
      "A working product is publicly accessible.",
      "The interface visibly supports configurable generation and saved stories.",
      "No therapeutic or developmental outcome is claimed; the demonstrated result is the functioning tool.",
    ],
  },
  {
    slug: "bidly",
    index: "02",
    label: "AI SaaS · Owned product",
    title: "Bidly",
    summary: "An AI proposal and reply-coaching product that helps freelancers understand opportunities and respond in their own voice.",
    metric: "230+ USERS",
    className: "project-blue",
    image: "/work/bidly.png",
    imageAlt: "Bidly marketing page and application dashboard",
    liveUrl: "https://bidly.space/",
    headline: "Turning a repetitive freelance task into a focused, paid AI product.",
    context: "Freelancers often spend significant time decoding job posts, drafting proposals and deciding how to respond after a prospect replies. Cipher created Bidly as an owned product, giving the team direct responsibility for product decisions, model behaviour, billing and operations.",
    challenge: "A useful proposal assistant cannot simply produce generic text. It needs to identify what a client actually values, preserve the freelancer’s voice, critique its own draft and remain economical enough to support free and paid usage.",
    solution: "Bidly converts a job post into a clear client brief and human-sounding proposal in about 30 seconds. A win score reviews the hook, specificity, credibility, clarity and call to action, while Closer supports the conversation after a prospect replies.",
    shipped: [
      "AI-assisted proposal generation grounded in the supplied job post",
      "Client-brief extraction and multi-factor proposal scoring",
      "Conversation coaching for replies, pricing and negotiation",
      "Profile optimization, proposal history and usage controls",
      "Free and Pro plans with live billing and product operations",
    ],
    evidence: [
      "230+ users reported from the live product.",
      "Public Free and Pro plans demonstrate a functioning commercial model.",
      "The public product documents proposal generation, scoring and reply coaching.",
    ],
  },
  {
    slug: "perfect-match-schools",
    index: "03",
    label: "Education · Two-sided SaaS",
    title: "PerfectMatchSchools",
    summary: "A recruiting platform designed to connect teachers and schools through fit, teaching style and personality—not listings alone.",
    metric: "LIVE SAAS",
    className: "project-ink",
    image: "/work/perfect-match-schools.png",
    imageAlt: "PerfectMatchSchools landing page for teachers and schools",
    liveUrl: "https://www.perfectmatchschools.com/",
    headline: "A clearer route from teacher profile to school fit.",
    context: "Teacher recruitment is a two-sided problem: educators need schools that value how they teach, while schools need a more meaningful view of applicants than a conventional job board provides.",
    challenge: "The experience had to serve two different users without blurring their journeys. Teachers and schools each needed an appropriate entry point, structured information and a shared matching workflow.",
    solution: "Cipher built a focused SaaS experience with distinct teacher and school onboarding paths and a matching proposition centred on teaching style and personality. The resulting product turns a broad recruiting idea into a coherent, usable workflow.",
    shipped: [
      "Separate teacher and school entry journeys",
      "Profile-led recruiting and matching workflow",
      "Role-specific authentication and product navigation",
      "Responsive public experience and production deployment",
    ],
    evidence: [
      "The public product presents distinct teacher and school paths.",
      "Its live positioning explicitly centres personality-based matching.",
      "Usage, placement and conversion metrics remain unpublished until verified.",
    ],
  },
  {
    slug: "propchex",
    index: "04",
    label: "Real estate · SaaS + automation",
    title: "PropChex",
    summary: "A property-listing operations platform with vendor coordination, secure access and an AI-assisted support workflow.",
    metric: "SAAS + n8n",
    className: "project-warm",
    image: "/work/propchex-support-automation.png",
    imageAlt: "n8n workflow for the PropChex AI-assisted support agent",
    liveUrl: "https://www.propchex.app/",
    headline: "Coordinating listing work—and the support around it—in one operating system.",
    context: "Real-estate agents coordinate cleaners, stagers, photographers and other vendors across deadlines, documents and access details. Those moving parts often live in texts, email threads and handwritten notes, creating weak visibility and avoidable follow-up.",
    challenge: "PropChex needed to centralize listing operations without forcing every vendor to adopt another account. It also needed support automation that could resolve known questions quickly while escalating uncertain requests instead of inventing an answer.",
    solution: "The product combines property checklists, a reusable vendor library, no-account vendor links, documents, check-ins, messaging and encrypted access-code tracking. Cipher also built an n8n support agent that receives inbound email, consults a knowledge base, classifies the request and either replies automatically or routes the case to a human.",
    shipped: [
      "Listing-level checklists, vendor assignments and progress tracking",
      "No-account vendor links for updates, files, photos and check-ins",
      "Document hub, in-app messaging and audited secure access codes",
      "Inbound-email parsing and knowledge-base retrieval in n8n",
      "AI classification with controlled auto-answer and human-escalation branches",
    ],
    evidence: [
      "The public product documents its operational feature set and pricing tiers.",
      "The supplied workflow shows the support agent from inbound webhook through answer or escalation.",
      "No time-saved or support-resolution metric is claimed until production data is verified.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
