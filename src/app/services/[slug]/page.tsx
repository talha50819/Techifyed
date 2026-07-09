import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CTASection from "@/components/CTASection";
import ServiceIcon from "@/components/ServiceIcon";
import { services, getServiceBySlug } from "@/data/services";
import { buildMetadata, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.longDesc,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.longDesc,
    url: `${SITE_URL}/services/${service.slug}/`,
    provider: {
      "@type": "ProfessionalService",
      name: "Techifyed",
      url: SITE_URL,
    },
    areaServed: "US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/services/${service.slug}/`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <nav className="text-sm text-neutral-500">
            <Link href="/services" className="hover:text-primary-600">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">{service.title}</span>
          </nav>

          <div className="mt-8 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-brand text-white">
                <ServiceIcon icon={service.icon} className="h-7 w-7" />
              </div>
              <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg text-neutral-600">{service.longDesc}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Button>
                {service.slug === "web-development" && (
                  <Button href="/custom-web-development-services-usa" variant="secondary">
                    See USA web development services
                  </Button>
                )}
                {service.slug === "mobile-app-development" && (
                  <Button href="/mobile-app-development-services-usa" variant="secondary">
                    See USA mobile app development services
                  </Button>
                )}
                {service.slug === "ui-ux-design" && (
                  <Button href="/ui-ux-design-services-usa" variant="secondary">
                    See USA UI/UX design services
                  </Button>
                )}
                {service.slug === "graphic-design-branding" && (
                  <Button href="/graphic-design-branding-services-usa" variant="secondary">
                    See USA branding services
                  </Button>
                )}
                {service.slug === "digital-marketing" && (
                  <Button href="/digital-marketing-services-usa" variant="secondary">
                    See USA digital marketing services
                  </Button>
                )}
                {service.slug === "ai-ml-solutions" && (
                  <Button href="/ai-ml-solutions-usa" variant="secondary">
                    See USA AI/ML solutions
                  </Button>
                )}
                {service.slug === "content-creation" && (
                  <Button href="/content-creation-services-usa" variant="secondary">
                    See USA content creation services
                  </Button>
                )}
                {service.slug === "content-writing" && (
                  <Button href="/content-writing-services-usa" variant="secondary">
                    See USA content writing services
                  </Button>
                )}
                {service.slug === "software-development" && (
                  <Button href="/software-development-services-usa" variant="secondary">
                    See USA software development services
                  </Button>
                )}
                {service.slug === "business-applications-enterprise-solutions" && (
                  <Button
                    href="/business-applications-enterprise-solutions-usa"
                    variant="secondary"
                  >
                    See USA business applications & enterprise solutions
                  </Button>
                )}
                {service.slug === "cybersecurity-services" && (
                  <Button href="/cybersecurity-services-usa" variant="secondary">
                    See USA cybersecurity services
                  </Button>
                )}
                {service.slug === "it-consulting" && (
                  <Button href="/it-consulting-services-usa" variant="secondary">
                    See USA IT consulting services
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)]">
                What&apos;s included
              </h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)]">
                Our process
              </h2>
              <div className="mt-6 space-y-6">
                {service.processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 font-[family-name:var(--font-heading)] text-sm font-bold text-primary-700">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">{step.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight text-[var(--foreground)]">
            Related services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <ServiceIcon icon={s.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-[var(--foreground)]">{s.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
