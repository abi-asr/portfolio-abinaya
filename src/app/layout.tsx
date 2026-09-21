import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://abinayarajangam.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abinaya Rajangam | Senior Software Engineer & Frontend Architect",
    template: "%s | Abinaya Rajangam",
  },
  description:
    "Senior Software Engineer specializing in Frontend Architecture, Micro-Frontends, and Enterprise Full-Stack Systems with 6.5+ years React and 2+ years Java experience.",
  keywords: [
    "Abinaya Rajangam",
    "Senior Software Engineer",
    "Frontend Architect",
    "React Specialist",
    "Next.js",
    "Java Enterprise",
    "Micro-Frontends",
    "Module Federation",
    "Design Systems",
    "WCAG 2.1",
    "Engineering Velocity",
    "System Architect",
  ],
  authors: [{ name: "Abinaya Rajangam", url: siteUrl }],
  creator: "Abinaya Rajangam",
  publisher: "Abinaya Rajangam",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abinaya Rajangam Portfolio",
    title: "Abinaya Rajangam | Senior Software Engineer & Frontend Architect",
    description:
      "Explore the interactive engineering portfolio of Abinaya Rajangam: 6.5+ yrs React, 2+ yrs Java, micro-frontends, AST codemods, and enterprise architecture.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abinaya Rajangam - Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abinaya Rajangam | Senior Software Engineer & Frontend Architect",
    description:
      "Senior Software Engineer specializing in Frontend Architecture, Micro-Frontends, and Enterprise Systems.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@abinayarajangam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#080d1a] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
