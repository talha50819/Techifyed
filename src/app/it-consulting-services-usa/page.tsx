import ItConsultingLandingContent from "@/components/ItConsultingLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "IT Consulting Services in USA",
  description:
    "Techifyed provides IT consulting services in the USA, including technology strategy and roadmapping, vendor and tooling evaluation, cloud and infrastructure planning, technical due diligence, team augmentation, and digital transformation planning.",
  path: "/it-consulting-services-usa/",
});

export default function ItConsultingServicesUsaPage() {
  return (
    <ItConsultingLandingContent
      h1="IT Consulting Services in USA — Practical Technology Strategy Built Around Your Roadmap"
      heroLine="Your technology roadmap should not just live in a slide deck. It should reflect your real budget, team capacity, and timeline, and someone should stay involved to help you actually execute it. Techifyed helps businesses across the United States plan technology strategy, evaluate vendors, and implement roadmaps with vendor-neutral, hands-on advisory support."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
