import ContentWritingLandingContent from "@/components/ContentWritingLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Content Writing Services in USA",
  description:
    "Techifyed provides content writing services in the USA, including website copywriting, blog and article writing, SEO content strategy, email and campaign copy, technical documentation, and editing and proofreading.",
  path: "/content-writing-services-usa/",
});

export default function ContentWritingUsaPage() {
  return (
    <ContentWritingLandingContent
      h1="Content Writing Services in USA — Copy That Reads Clearly and Ranks on Purpose"
      heroLine="Your content should not just fill a page. It should read clearly, sound like your brand, and target the keywords your customers are actually searching. Techifyed helps businesses across the United States write website copy, blog content, and documentation with research, SEO structure, and editorial rigor under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
