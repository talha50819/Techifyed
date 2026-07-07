export type PortfolioItem = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  image: string;
  gradient: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "ecommerce-platform-redesign",
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    blurb:
      "A full storefront rebuild focused on faster load times and a streamlined checkout flow.",
    image: "/images/portfolio/ecommerce.jpg",
    gradient: "from-primary-600 to-accent-500",
  },
  {
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    category: "Mobile App Development",
    blurb:
      "A cross-platform companion app for tracking workouts, goals, and progress.",
    image: "/images/portfolio/fitness-app.jpg",
    gradient: "from-primary-700 to-primary-400",
  },
  {
    slug: "healthcare-portal-uiux",
    title: "Patient Portal UX Overhaul",
    category: "UI/UX Design",
    blurb:
      "Simplified appointment booking and records access for a healthcare provider portal.",
    image: "/images/portfolio/healthcare-ux.jpg",
    gradient: "from-accent-500 to-primary-600",
  },
  {
    slug: "brand-identity-refresh",
    title: "Brand Identity Refresh",
    category: "Graphic Design & Branding",
    blurb:
      "A full visual identity system, from logo mark to marketing collateral guidelines.",
    image: "/images/portfolio/branding.jpg",
    gradient: "from-primary-500 to-accent-600",
  },
  {
    slug: "regional-retailer-seo-growth",
    title: "Regional Retailer SEO & Growth",
    category: "Digital Marketing",
    blurb:
      "An SEO and paid media program built to grow organic and local search visibility.",
    image: "/images/portfolio/seo-growth.jpg",
    gradient: "from-primary-600 to-primary-900",
  },
  {
    slug: "support-chatbot-assistant",
    title: "AI Support Assistant",
    category: "AI/ML Solutions",
    blurb:
      "A custom support chatbot trained on internal documentation to deflect routine tickets.",
    image: "/images/portfolio/ai-assistant.jpg",
    gradient: "from-accent-500 to-primary-800",
  },
];
