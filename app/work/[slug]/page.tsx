import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? { title: study.title, description: study.summary } : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  return (
    <>
      <section className="case-hero section-shell">
        <div className="case-hero-copy">
          <p className="eyebrow">{study.label}</p>
          <h1>{study.headline}</h1>
          <p>{study.summary}</p>
          <div className="case-actions">
            <a className="button" href={study.liveUrl} target="_blank" rel="noreferrer">Visit live product <span>↗</span></a>
            <Link className="text-link" href="/work">All work <span>←</span></Link>
          </div>
        </div>
        <div className="case-fact"><span>Selected build</span><strong>{study.title}</strong><small>{study.metric}</small></div>
      </section>

      <section className="case-image section-shell">
        <Image src={study.image} alt={study.imageAlt} fill priority sizes="(max-width: 680px) 100vw, 1360px" />
      </section>

      <section className="case-narrative section-shell">
        <div><p className="eyebrow">Context</p><h2>The situation</h2></div>
        <p>{study.context}</p>
        <div><p className="eyebrow">Constraint</p><h2>What had to change</h2></div>
        <p>{study.challenge}</p>
        <div><p className="eyebrow">Response</p><h2>What Cipher built</h2></div>
        <p>{study.solution}</p>
      </section>

      <section className="case-delivery">
        <div className="section-shell case-delivery-grid">
          <div><p className="eyebrow light">Delivered system</p><h2>What shipped.</h2></div>
          <ol>{study.shipped.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
        </div>
      </section>

      <section className="case-evidence section-shell">
        <div><p className="eyebrow">Proof boundary</p><h2>What we can verify.</h2><p>Credibility is stronger when the boundary between demonstrated facts and future measurement is explicit.</p></div>
        <ul>{study.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </>
  );
}
