import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";

const capabilities = [
  "Product strategy & scoping", "React / Next.js applications", "Node.js & PostgreSQL",
  "Advanced WordPress & headless", "AI agents & RAG", "n8n & MCP automation",
  "Payments & integrations", "CI/CD & production operations",
];

export default function Home() {
  return (
    <>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> Product engineering + applied AI</p>
          <h1>Software and AI systems that work <em>beyond the demo.</em></h1>
          <p className="lede">We help founders, agencies and growing teams build new digital products, rescue unstable platforms and automate high-cost workflows.</p>
          <div className="actions"><Link href="/contact" className="button">Start a project <span>↗</span></Link><Link href="/work" className="text-link">Explore our work <span>↓</span></Link></div>
        </div>
        <div className="hero-art">
          <Image src="/grid.svg" alt="Abstract connected system diagram" fill priority sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="system-card card-one"><small>INPUT</small><b>Unclear product</b><i /></div>
          <div className="system-card card-two"><small>OUTPUT</small><b>Production system</b><i className="ok">✓</i></div>
        </div>
      </section>

      <section className="proof-bar">
        <div><strong>20+</strong><span>Products shipped</span></div>
        <div><strong>230+</strong><span>Users on an owned AI product</span></div>
        <div><strong>TOP RATED</strong><span>Talent on the team</span></div>
        <div><strong>4 MARKETS</strong><span>US · UK · CA · AU</span></div>
      </section>

      <section className="section-shell intro-grid">
        <div><p className="eyebrow">What we change</p><h2>From technical uncertainty to an operating advantage.</h2></div>
        <p>Broad capability is useful only when it solves a precise problem. Cipher brings product thinking, specialist engineering and accountable delivery together around two outcomes.</p>
      </section>

      <section className="section-shell service-pair">
        <Link href="/product-engineering" className="service-card dark-card">
          <span className="service-number">01</span>
          <div><p className="eyebrow light">Build or rescue</p><h2>A digital product your business can operate.</h2><p>SaaS, portals, marketplaces, advanced WordPress and headless systems, e-commerce and internal tools—from scope through production.</p></div>
          <span className="round-arrow">↗</span>
        </Link>
        <Link href="/ai-automation" className="service-card blue-card">
          <span className="service-number">02</span>
          <div><p className="eyebrow light">Automate a workflow</p><h2>AI systems that act with control and evidence.</h2><p>Agents and automations connected to real business tools, with human approval, evaluation, observability and recoverable failure.</p></div>
          <span className="round-arrow">↗</span>
        </Link>
      </section>

      <section className="section-shell work-section">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Built for the real world.</h2></div><Link href="/work" className="text-link">View all work <span>↗</span></Link></div>
        <div className="project-grid">
          <ProjectCard index="01" label="Accessibility · Custom AI product" title="AAC Story Builder" description="A personalized story-making tool designed around one non-speaking child’s AAC vocabulary and device navigation." metric="HUMAN-CENTRED" className="project-warm" href="/work/aac-story-builder" image="/work/aac-story-builder.png" imageAlt="AAC Story Builder interface" />
          <ProjectCard index="02" label="AI SaaS · Owned product" title="Bidly" description="An AI proposal and reply-coaching product with a live commercial model and more than 230 users." metric="230+ USERS" className="project-blue" href="/work/bidly" image="/work/bidly.png" imageAlt="Bidly product dashboard" />
          <ProjectCard index="03" label="Real estate · SaaS + automation" title="PropChex" description="Property-listing operations paired with a controlled AI support and human-escalation workflow." metric="SAAS + n8n" className="project-ink" href="/work/propchex" image="/work/propchex-support-automation.png" imageAlt="PropChex support automation workflow" />
        </div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>{[...capabilities, ...capabilities].map((item, i) => <span key={`${item}-${i}`}>{item} <b>✦</b></span>)}</div></section>

      <section className="section-shell why-grid">
        <div className="sticky-copy"><p className="eyebrow">Why Cipher</p><h2>Delivery stays accountable.</h2><p>Senior technical leadership remains involved from the first hard question through production.</p></div>
        <div className="principles">
          {[
            ["01", "Senior ownership", "Daniel leads product framing, architecture and final technical review. Critical decisions stay with a named owner."],
            ["02", "Specialists where needed", "Modern application, WordPress and headless, AI automation, payments and data expertise inside one delivery system."],
            ["03", "Progress you can inspect", "Written updates, working demonstrations, decision records and milestone acceptance—not status theatre."],
            ["04", "Your system remains yours", "Client-owned source, accounts and operating documentation as agreed. No artificial lock-in."],
          ].map(([n, t, d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell"><p className="eyebrow light">How we work</p><div className="process-title"><h2>Clarity before code.<br />Evidence before handoff.</h2><p>Every engagement moves through four visible stages with scope, ownership and acceptance defined.</p></div>
          <div className="process-grid">
            {[["01", "Diagnose", "We inspect the product or workflow, establish the stakes and find the risks that affect scope."], ["02", "Define", "We agree the target state, boundaries, measures, responsibilities and delivery plan."], ["03", "Build visibly", "The team ships in controlled milestones with written updates and working demonstrations."], ["04", "Launch & operate", "We deploy, document and hand over—or continue through a bounded operating agreement."]].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell team-section">
        <div className="section-heading"><div><p className="eyebrow">The team</p><h2>Named people.<br />Clear responsibility.</h2></div><p>Cipher combines accountable technical leadership with specialists across product, web systems and applied AI.</p></div>
        <div className="team-grid">
          <article className="founder-card"><div className="portrait"><Image src="/team/daniel-oyinloluwa.png" alt="Daniel Oyinloluwa, founder of Cipher Development" fill sizes="(max-width: 680px) 100vw, 28vw" /></div><div><p className="eyebrow">Founder & product / engineering lead</p><h3>Daniel Oyinloluwa</h3><p>Leads discovery, solution architecture and technical quality across AI-integrated SaaS, payments, data systems and automation.</p></div></article>
          <article><div className="portrait"><Image src="/team/gabriel-dosunmu.png" alt="Gabriel Dosunmu, full-stack product engineer at Cipher Development" fill sizes="(max-width: 680px) 100vw, 28vw" /></div><p className="eyebrow">Full-stack product engineer</p><h3>Gabriel Dosunmu</h3><p>Architects and ships modern web products, LLM integrations, CI/CD and post-launch improvements.</p></article>
          <article><div className="portrait"><Image src="/team/daniels.png" alt="Daniels, WordPress and web systems engineer at Cipher Development" fill sizes="(max-width: 680px) 100vw, 28vw" /></div><p className="eyebrow">WordPress & web systems engineer</p><h3>Daniels</h3><p>Builds and recovers advanced WordPress, WooCommerce, ACF, REST API and headless systems.</p></article>
        </div>
      </section>
    </>
  );
}
