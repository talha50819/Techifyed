import { notFound } from "next/navigation";
import CybersecurityLandingContent from "@/components/CybersecurityLandingContent";
import { getCybersecurityStateBySlug, buildCybersecurityStateMetaDescription } from "@/data/cybersecurityStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "south-carolina";
const state = getCybersecurityStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Cybersecurity Services in ${state!.name}`,
  description: buildCybersecurityStateMetaDescription(state!),
  path: `/cybersecurity-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <CybersecurityLandingContent
      h1={`Cybersecurity Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
