import type { Metadata } from "next";
import Image from "next/image";
import { Target, HeartHandshake, Layers, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Techifyed's mission, values, and approach to building digital products for growing businesses.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure success by the results our work drives for your business, not just deliverables shipped.",
  },
  {
    icon: HeartHandshake,
    title: "Genuine partnership",
    description:
      "We work as an extension of your team — clear communication, honest recommendations, no black boxes.",
  },
  {
    icon: Layers,
    title: "Full-stack thinking",
    description:
      "Design, engineering, and marketing decisions are made together, not in isolated silos.",
  },
  {
    icon: Rocket,
    title: "Built to last",
    description:
      "We favor solid, maintainable foundations over quick hacks that create problems later.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container className="text-center">
          <span className="inline-block text-sm font-semibold tracking-wide text-primary-600 uppercase">
            About Techifyed
          </span>
          <h1 className="mx-auto mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            A digital agency built around{" "}
            <span className="gradient-brand-text">practical results</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Techifyed was founded to give growing businesses access to the
            same caliber of design, engineering, and strategy that larger
            companies take for granted — without the overhead of managing a
            dozen vendors.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Our approach
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Every engagement starts with understanding your business, not
                just your brief. We bring together strategy, design, and
                engineering from day one so decisions in one discipline
                account for the others.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Whether we&apos;re shipping a new website, an internal tool, or
                a full product, our goal is the same: build something that
                works well today and holds up as you grow.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64">
                <Image
                  src="/images/about/workspace.jpg"
                  alt="A collaborative workspace"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-primary-50 p-6">
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-700">
                    12
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">service disciplines under one roof</p>
                </div>
                <div className="rounded-2xl bg-primary-50 p-6">
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary-700">
                    1
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">dedicated point of contact per project</p>
                </div>
              </div>
              <div className="rounded-2xl gradient-brand p-6 text-white">
                <p className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  Orlando, FL — serving clients everywhere
                </p>
                <p className="mt-1 text-sm text-white/85">
                  Remote-friendly collaboration with a home base at 2410 Canopy
                  Breeze Circle, Orlando, FL.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate flex min-h-[320px] items-center overflow-hidden">
        <Image
          src="/images/about/focus.jpg"
          alt="Focused, detail-oriented work"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary-950/75" />
        <Container className="py-16 text-center">
          <p className="mx-auto max-w-xl font-[family-name:var(--font-heading)] text-2xl font-semibold text-white sm:text-3xl">
            Heads-down, detail-focused, and accountable for the outcome.
          </p>
        </Container>
      </section>

      <section className="bg-primary-50/60 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What we value" title="The principles behind our work" />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's build something worth showing off"
        description="Tell us about your project and we'll help you scope the right approach."
      />
    </>
  );
}
