import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./portraits.css";
import "./case-studies.css";

export const metadata: Metadata = {
  title: { default: "Cipher Development — Product Engineering & Applied AI", template: "%s — Cipher Development" },
  description: "Cipher Development builds, rescues and operates production software and AI systems for founders, agencies and growing teams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
