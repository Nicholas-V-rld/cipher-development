import { ProjectCard } from "@/components/project-card";
import { caseStudies } from "@/lib/case-studies";

export const metadata = { title: "Work" };

export default function WorkPage(){return <><section className="page-hero section-shell"><p className="eyebrow">Selected work</p><h1>Products that moved from intention to operation.</h1><p>Client and owned products across accessibility, applied AI, education and real-estate operations.</p></section><section className="section-shell project-grid work-page-grid">{caseStudies.map((project)=><ProjectCard key={project.slug} index={project.index} label={project.label} title={project.title} description={project.summary} metric={project.metric} className={project.className} href={`/work/${project.slug}`} image={project.image} imageAlt={project.imageAlt}/>)}</section><section className="proof-note section-shell"><p><b>Evidence before embellishment.</b> These stories use publicly visible product behaviour and founder-supplied delivery facts. Unverified commercial outcomes are intentionally excluded.</p></section></>}
