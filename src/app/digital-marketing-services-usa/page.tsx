import MarketingLandingContent from "@/components/MarketingLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing Services in USA",
  description:
    "Techifyed provides digital marketing services in the USA, including SEO, paid search and social advertising, email marketing automation, social media management, conversion rate optimization, and analytics reporting.",
  path: "/digital-marketing-services-usa/",
});

export default function DigitalMarketingUsaPage() {
  return (
    <MarketingLandingContent
      h1="Digital Marketing Services in USA — Growth Built on Strategy, Not Guesswork"
      heroLine="Your marketing should not just generate impressions. It should bring qualified leads, track clearly to revenue, and improve month over month. Techifyed helps businesses across the United States run SEO, paid media, email, and conversion campaigns with strategy, tracking, and honest reporting under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
