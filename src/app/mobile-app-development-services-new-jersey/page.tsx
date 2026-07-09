import { notFound } from "next/navigation";
import MobileAppLandingContent from "@/components/MobileAppLandingContent";
import { getMobileAppStateBySlug, buildMobileAppStateMetaDescription } from "@/data/mobileAppStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "new-jersey";
const state = getMobileAppStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Mobile App Development Services in ${state!.name}`,
  description: buildMobileAppStateMetaDescription(state!),
  path: `/mobile-app-development-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <MobileAppLandingContent
      h1={`Mobile App Development Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
