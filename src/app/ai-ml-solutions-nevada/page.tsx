import { notFound } from "next/navigation";
import AiMlLandingContent from "@/components/AiMlLandingContent";
import { getAiMlStateBySlug, buildAiMlStateMetaDescription } from "@/data/aiMlStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "nevada";
const state = getAiMlStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `AI/ML Solutions in ${state!.name}`,
  description: buildAiMlStateMetaDescription(state!),
  path: `/ai-ml-solutions-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <AiMlLandingContent
      h1={`AI/ML Solutions in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
