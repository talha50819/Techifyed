import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { portfolioItems } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "A sample of Techifyed's work across web development, mobile apps, design, marketing, and AI.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Our work"
            title="A sample of what we build"
            description="Representative projects across our core service lines, illustrating the kind of work we take on."
          />
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <video
                    className="h-full w-full object-cover"
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 mix-blend-multiply`}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                    {item.category}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{item.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want to see your project here next?"
        description="Let's talk about what you're trying to build."
      />
    </>
  );
}
