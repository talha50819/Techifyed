import CybersecurityLandingContent from "@/components/CybersecurityLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cybersecurity Services in USA",
  description:
    "Techifyed provides cybersecurity services in the USA, including security audits and vulnerability assessments, application and infrastructure hardening, authorized penetration testing, compliance readiness support, incident response planning, and security monitoring.",
  path: "/cybersecurity-services-usa/",
});

export default function CybersecurityServicesUsaPage() {
  return (
    <CybersecurityLandingContent
      h1="Cybersecurity Services in USA — Practical Security Built to Protect What You've Already Built"
      heroLine="Your security program should not just be a scan report that sits unread. It should identify real risk, prioritize what to fix first, and keep watching after the first assessment is done. Techifyed helps businesses across the United States run audits, hardening, and ongoing monitoring with clear reporting and long-term support under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
