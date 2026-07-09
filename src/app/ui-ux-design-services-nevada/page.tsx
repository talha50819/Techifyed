import { notFound } from "next/navigation";
import UiUxLandingContent from "@/components/UiUxLandingContent";
import { getUiUxStateBySlug, buildUiUxStateMetaDescription } from "@/data/uiUxStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "nevada";
const state = getUiUxStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `UI/UX Design Services in ${state!.name}`,
  description: buildUiUxStateMetaDescription(state!),
  path: `/ui-ux-design-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <UiUxLandingContent
      h1={`UI/UX Design Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
