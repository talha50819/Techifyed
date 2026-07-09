import { notFound } from "next/navigation";
import ContentCreationLandingContent from "@/components/ContentCreationLandingContent";
import { getContentCreationStateBySlug, buildContentCreationStateMetaDescription } from "@/data/contentCreationStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "arizona";
const state = getContentCreationStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Content Creation Services in ${state!.name}`,
  description: buildContentCreationStateMetaDescription(state!),
  path: `/content-creation-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <ContentCreationLandingContent
      h1={`Content Creation Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
