import ContentCreationLandingContent from "@/components/ContentCreationLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Content Creation Services in USA",
  description:
    "Techifyed provides content creation services in the USA, including video production, product and brand photography, social media content, short-form video, motion graphics, and content repurposing.",
  path: "/content-creation-services-usa/",
});

export default function ContentCreationUsaPage() {
  return (
    <ContentCreationLandingContent
      h1="Content Creation Services in USA — Photo & Video Content Built to Capture Attention and Stay On-Brand"
      heroLine="Your content should not just fill a calendar. It should look professional, sound like your brand, and get repurposed across every channel instead of being used once and forgotten. Techifyed helps businesses across the United States produce video, photography, and social content with strategy, production, and repurposing under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
