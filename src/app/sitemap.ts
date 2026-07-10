import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { subServicesByService } from "@/data/subServices";
import { webDevStates } from "@/data/webDevStates";
import { mobileAppStates } from "@/data/mobileAppStates";
import { uiUxStates } from "@/data/uiUxStates";
import { brandingStates } from "@/data/brandingStates";
import { marketingStates } from "@/data/marketingStates";
import { aiMlStates } from "@/data/aiMlStates";
import { contentCreationStates } from "@/data/contentCreationStates";
import { contentWritingStates } from "@/data/contentWritingStates";
import { softwareDevStates } from "@/data/softwareDevStates";
import { enterpriseStates } from "@/data/enterpriseStates";
import { cybersecurityStates } from "@/data/cybersecurityStates";
import { itConsultingStates } from "@/data/itConsultingStates";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

function buildLocationEntries(
  urlPrefix: string,
  states: { slug: string }[],
  now: Date
) {
  const hubEntry = {
    url: `${SITE_URL}/${urlPrefix}-usa/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  };

  const stateEntries = states.map((state) => ({
    url: `${SITE_URL}/${urlPrefix}-${state.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [hubEntry, ...stateEntries];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/about/", priority: 0.7 },
    { path: "/services/", priority: 0.9 },
    { path: "/portfolio/", priority: 0.7 },
    { path: "/blog/", priority: 0.5 },
    { path: "/contact/", priority: 0.7 },
    { path: "/privacy-policy/", priority: 0.3 },
    { path: "/terms-and-conditions/", priority: 0.3 },
    { path: "/information-security-policy/", priority: 0.3 },
    { path: "/compliance-policy-development/", priority: 0.3 },
  ];

  const now = new Date();

  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const subServiceEntries = Object.entries(subServicesByService).flatMap(
    ([serviceSlug, subs]) =>
      subs.map((sub) => ({
        url: `${SITE_URL}/services/${serviceSlug}/${sub.slug}/`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
  );

  const webDevEntries = buildLocationEntries(
    "custom-web-development-services",
    webDevStates,
    now
  );
  const mobileAppEntries = buildLocationEntries(
    "mobile-app-development-services",
    mobileAppStates,
    now
  );
  const uiUxEntries = buildLocationEntries(
    "ui-ux-design-services",
    uiUxStates,
    now
  );
  const brandingEntries = buildLocationEntries(
    "graphic-design-branding-services",
    brandingStates,
    now
  );
  const marketingEntries = buildLocationEntries(
    "digital-marketing-services",
    marketingStates,
    now
  );
  const aiMlEntries = buildLocationEntries("ai-ml-solutions", aiMlStates, now);
  const contentCreationEntries = buildLocationEntries(
    "content-creation-services",
    contentCreationStates,
    now
  );
  const contentWritingEntries = buildLocationEntries(
    "content-writing-services",
    contentWritingStates,
    now
  );
  const softwareDevEntries = buildLocationEntries(
    "software-development-services",
    softwareDevStates,
    now
  );
  const enterpriseEntries = buildLocationEntries(
    "business-applications-enterprise-solutions",
    enterpriseStates,
    now
  );
  const cybersecurityEntries = buildLocationEntries(
    "cybersecurity-services",
    cybersecurityStates,
    now
  );
  const itConsultingEntries = buildLocationEntries(
    "it-consulting-services",
    itConsultingStates,
    now
  );

  return [
    ...staticEntries,
    ...serviceEntries,
    ...subServiceEntries,
    ...webDevEntries,
    ...mobileAppEntries,
    ...uiUxEntries,
    ...brandingEntries,
    ...marketingEntries,
    ...aiMlEntries,
    ...contentCreationEntries,
    ...contentWritingEntries,
    ...softwareDevEntries,
    ...enterpriseEntries,
    ...cybersecurityEntries,
    ...itConsultingEntries,
  ];
}
