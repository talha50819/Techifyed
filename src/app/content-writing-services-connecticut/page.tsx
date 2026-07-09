import { notFound } from "next/navigation";
import ContentWritingLandingContent from "@/components/ContentWritingLandingContent";
import { getContentWritingStateBySlug, buildContentWritingStateMetaDescription } from "@/data/contentWritingStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "connecticut";
const state = getContentWritingStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Content Writing Services in ${state!.name}`,
  description: buildContentWritingStateMetaDescription(state!),
  path: `/content-writing-services-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <ContentWritingLandingContent
      h1={`Content Writing Services in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
