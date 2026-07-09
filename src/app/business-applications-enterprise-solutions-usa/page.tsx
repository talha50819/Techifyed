import EnterpriseLandingContent from "@/components/EnterpriseLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Business Applications & Enterprise Solutions in USA",
  description:
    "Techifyed provides business applications and enterprise solutions in the USA, including custom CRM and ERP systems, internal dashboards, workflow automation, system integrations, role-based access control, and data migration and reporting.",
  path: "/business-applications-enterprise-solutions-usa/",
});

export default function BusinessApplicationsEnterpriseSolutionsUsaPage() {
  return (
    <EnterpriseLandingContent
      h1="Business Applications & Enterprise Solutions in USA — Systems That Scale With Your Operations"
      heroLine="Your business systems should not force your team into a rigid workflow. They should match how your organization actually operates, and keep working as you add locations, teams, and complexity. Techifyed helps companies across the United States build CRMs, ERPs, and internal systems with process mapping, clean architecture, and structured rollouts under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
