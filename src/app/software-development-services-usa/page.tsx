import SoftwareDevLandingContent from "@/components/SoftwareDevLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Software Development Services in USA",
  description:
    "Techifyed provides custom software development services in the USA, including software architecture and design, backend and API development, cloud infrastructure and DevOps, legacy system modernization, QA and automated testing, and long-term technical support.",
  path: "/software-development-services-usa/",
});

export default function SoftwareDevelopmentUsaPage() {
  return (
    <SoftwareDevLandingContent
      h1="Software Development Services in USA — Custom Software Built Around How Your Business Actually Works"
      heroLine="Your software should not just work on launch day. It should stay reliable, stay maintainable, and keep supporting your business as it grows and changes. Techifyed helps businesses across the United States build custom software, backend systems, and internal tools with architecture, testing, and long-term support under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
