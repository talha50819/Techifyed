import { notFound } from "next/navigation";
import ItConsultingLandingContent from "@/components/ItConsultingLandingContent";
import { getItConsultingStateBySlug, buildItConsultingStateMetaDescription } from "@/data/itConsultingStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "delaware";
const state = getItConsultingStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `IT Consulting Services in ${state!.name}`,
  description: buildItConsultingStateMetaDescription(state!),
  path: `/it-consulting-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <ItConsultingLandingContent
      h1={`IT Consulting Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
