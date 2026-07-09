import UiUxLandingContent from "@/components/UiUxLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "UI/UX Design Services in USA",
  description:
    "Techifyed provides UI/UX design services in the USA, including user research, wireframing, prototyping, visual design, design systems, usability testing, accessibility (WCAG) reviews, and Figma-based design handoff.",
  path: "/ui-ux-design-services-usa/",
});

export default function UiUxDesignUsaPage() {
  return (
    <UiUxLandingContent
      h1="UI/UX Design Services in USA — Interfaces Built Around How People Actually Use Them"
      heroLine="Your product should not just look good in a portfolio shot. It should be easy to understand, easy to navigate, and built to convert and retain real users. Techifyed helps businesses across the United States design research-driven interfaces, design systems, and product experiences with strategy, usability, accessibility, and developer-ready handoff under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
