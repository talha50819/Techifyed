import { notFound } from "next/navigation";
import EnterpriseLandingContent from "@/components/EnterpriseLandingContent";
import { getEnterpriseStateBySlug, buildEnterpriseStateMetaDescription } from "@/data/enterpriseStates";
import { buildMetadata } from "@/lib/seo";

const STATE_SLUG = "arkansas";
const state = getEnterpriseStateBySlug(STATE_SLUG);
if (!state) notFound();

export const metadata = buildMetadata({
  title: `Business Applications & Enterprise Solutions in ${state!.name}`,
  description: buildEnterpriseStateMetaDescription(state!),
  path: `/business-applications-enterprise-solutions-${STATE_SLUG}/`,
});

export default function Page() {
  return (
    <EnterpriseLandingContent
      h1={`Business Applications & Enterprise Solutions in ${state!.name}`}
      heroLine={state!.heroLine}
      regionName={state!.name}
      regionSlug={STATE_SLUG}
      localAngle={state!.localAngle}
      keywords={state!.keywords}
    />
  );
}
