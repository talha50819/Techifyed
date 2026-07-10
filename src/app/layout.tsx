import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentGuard from "@/components/ContentGuard";
import { siteConfig } from "@/data/siteConfig";
import { SITE_URL } from "@/lib/seo";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const defaultTitle =
  "Techifyed — Digital Agency for Web, Mobile, Design & Growth";
const defaultDescription =
  "Techifyed is a full-service digital agency delivering web development, mobile apps, UI/UX design, branding, digital marketing, AI/ML solutions, and enterprise software.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Techifyed",
  },
  description: defaultDescription,
  keywords: [
    "digital agency",
    "web development",
    "mobile app development",
    "UI/UX design",
    "branding agency",
    "digital marketing",
    "AI/ML solutions",
    "enterprise software",
    "Orlando digital agency",
  ],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-mark.png`,
  image: `${SITE_URL}/logo-mark.png`,
  telephone: siteConfig.phoneHref,
  email: siteConfig.emails.info,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressParts.street,
    addressLocality: siteConfig.addressParts.city,
    addressRegion: siteConfig.addressParts.region,
    postalCode: siteConfig.addressParts.postalCode,
    addressCountry: siteConfig.addressParts.country,
  },
  sameAs: Object.values(siteConfig.social).filter((url) => url !== "#"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1S6RB9FXYP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1S6RB9FXYP');
          `}
        </Script>

        {/* Tawk.to live chat */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6a50ed4abc94e01d417bdfd1/1jt61trb0';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        <ContentGuard />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
