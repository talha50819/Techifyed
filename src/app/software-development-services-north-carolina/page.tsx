import { notFound } from "next/navigation";
import SoftwareDevLandingContent from "@/components/SoftwareDevLandingContent";
import { getSoftwareDevStateBySlug, buildSoftwareDevStateMetaDescription } from "@/data/softwareDevStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "north-carolina";
const state = getSoftwareDevStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Software Development Services in ${state!.name}`,
  description: buildSoftwareDevStateMetaDescription(state!),
  path: `/software-development-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <SoftwareDevLandingContent
      h1={`Software Development Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
