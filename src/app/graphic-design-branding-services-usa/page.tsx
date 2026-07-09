import BrandingLandingContent from "@/components/BrandingLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Graphic Design & Branding Services in USA",
  description:
    "Techifyed provides graphic design and branding services in the USA, including logo design, brand identity systems, brand guidelines, marketing collateral, packaging design, and social media design kits.",
  path: "/graphic-design-branding-services-usa/",
});

export default function GraphicDesignBrandingUsaPage() {
  return (
    <BrandingLandingContent
      h1="Graphic Design & Branding Services in USA — Visual Identities Built to Make Your Business Memorable"
      heroLine="Your brand should not just look nice on one page. It should stay consistent across your logo, website, packaging, and every piece of marketing your business puts out. Techifyed helps businesses across the United States build brand identities, guidelines, and collateral with strategy, design, and long-term consistency under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
