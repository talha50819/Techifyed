import { notFound } from "next/navigation";
import BrandingLandingContent from "@/components/BrandingLandingContent";
import { getBrandingStateBySlug, buildBrandingStateMetaDescription } from "@/data/brandingStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "connecticut";
const state = getBrandingStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Graphic Design & Branding Services in ${state!.name}`,
  description: buildBrandingStateMetaDescription(state!),
  path: `/graphic-design-branding-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <BrandingLandingContent
      h1={`Graphic Design & Branding Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
