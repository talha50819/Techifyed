import { notFound } from "next/navigation";
import MarketingLandingContent from "@/components/MarketingLandingContent";
import { getMarketingStateBySlug, buildMarketingStateMetaDescription } from "@/data/marketingStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "rhode-island";
const state = getMarketingStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Digital Marketing Services in ${state!.name}`,
  description: buildMarketingStateMetaDescription(state!),
  path: `/digital-marketing-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <MarketingLandingContent
      h1={`Digital Marketing Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
