import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Work", "/work"],
  ["Product Engineering", "/product-engineering"],
  ["AI & Automation", "/ai-automation"],
  ["How we work", "/how-we-work"],
  ["About", "/about"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Cipher Development home">
        <Image src="/cipher-mark.svg" alt="" width={42} height={42} priority />
        <span><b>CIPHER</b><small>DEVELOPMENT</small></span>
      </Link>
      <nav aria-label="Main navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="button button-small" href="/contact">Start a project <span>↗</span></Link>
    </header>
  );
}
