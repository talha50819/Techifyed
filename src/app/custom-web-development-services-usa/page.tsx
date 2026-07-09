import WebDevLandingContent from "@/components/WebDevLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Custom Web Development Services in USA",
  description:
    "Techifyed provides custom web development services in the USA, including website design, WordPress development, React, Next.js, Node.js, e-commerce websites, web applications, Figma to development, integrations, SEO, security, and ongoing website support.",
  path: "/custom-web-development-services-usa/",
});

export default function CustomWebDevelopmentUsaPage() {
  return (
    <WebDevLandingContent
      h1="Custom Web Development Services in USA — Built for Businesses That Want More Than a Basic Website"
      heroLine="Your website should not just look modern. It should load fast, explain your value clearly, build trust, convert visitors, and support your business as it grows. Techifyed helps businesses across the United States build custom websites, e-commerce stores, landing pages, business portals, and web applications with strategy, design, development, integrations, performance, security, and support under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
