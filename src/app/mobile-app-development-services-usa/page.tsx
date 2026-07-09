import MobileAppLandingContent from "@/components/MobileAppLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mobile App Development Services in USA",
  description:
    "Techifyed provides mobile app development services in the USA, including iOS app development, Android app development, React Native, Flutter, app UI/UX design, app store deployment, backend & API integration, and ongoing app support.",
  path: "/mobile-app-development-services-usa/",
});

export default function MobileAppDevelopmentUsaPage() {
  return (
    <MobileAppLandingContent
      h1="Mobile App Development Services in USA — Built for Businesses That Want Apps Users Actually Keep"
      heroLine="Your app should not just look good in a demo. It should launch on both stores, run reliably, keep users engaged, and support your business as it grows. Techifyed helps businesses across the United States build custom iOS, Android, and cross-platform apps with strategy, design, development, integrations, performance, security, and support under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
