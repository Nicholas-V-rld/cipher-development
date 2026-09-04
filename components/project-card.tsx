import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  index: string;
  label: string;
  title: string;
  description: string;
  metric: string;
  className?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export function ProjectCard({ index, label, title, description, metric, className = "", href = "/contact", image, imageAlt = "" }: ProjectCardProps) {
  return (
    <article className={`project-card ${className}`}>
      <div className={`project-visual ${image ? "has-project-image" : ""}`}>
        {image ? <Image src={image} alt={imageAlt} fill sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw" /> : null}
        <span>{index}</span>
        {image ? <strong className="project-metric">{metric}</strong> : <div className="window"><i /><i /><i /><strong>{metric}</strong></div>}
      </div>
      <div className="project-copy">
        <p className="eyebrow">{label}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href}>{href.startsWith("/work/") ? "Read case study" : "Discuss a similar project"} <span>↗</span></Link>
      </div>
    </article>
  );
}
