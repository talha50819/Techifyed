import { notFound } from "next/navigation";
import WebDevLandingContent from "@/components/WebDevLandingContent";
import { getWebDevStateBySlug, buildWebDevStateMetaDescription } from "@/data/webDevStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "virginia";
const state = getWebDevStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Custom Web Development Services in ${state!.name}`,
  description: buildWebDevStateMetaDescription(state!),
  path: `/custom-web-development-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <WebDevLandingContent
      h1={`Custom Web Development Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
