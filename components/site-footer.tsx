import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-cta">
        <p className="eyebrow light">Have a product to ship?</p>
        <h2>Let&apos;s make it work<br />beyond the demo.</h2>
        <Link href="/contact" className="button button-light">Start a project <span>↗</span></Link>
      </div>
      <div className="footer-bottom">
        <Link href="/" className="brand brand-light">
          <Image src="/cipher-mark.svg" alt="" width={38} height={38} />
          <span><b>CIPHER</b><small>DEVELOPMENT</small></span>
        </Link>
        <p>Lagos-based. Working with teams across the US, UK, Canada and Australia.</p>
        <div><Link href="/work">Work</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      </div>
    </footer>
  );
}
