import { Newspaper } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on web development, design, marketing, and technology from the Techifyed team.",
  path: "/blog/",
});

const upcomingTopics = [
  {
    category: "Web Development",
    title: "Choosing the right stack for your next web app",
  },
  {
    category: "Digital Marketing",
    title: "SEO fundamentals every growing business should know",
  },
  {
    category: "AI/ML Solutions",
    title: "Where AI actually helps — and where it doesn't (yet)",
  },
  {
    category: "UI/UX Design",
    title: "Small design decisions that improve conversion",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-radial-fade py-20 sm:py-28">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Insights"
            title="Our blog is coming soon"
            description="We're building out a library of practical articles on web, design, marketing, and technology. Here's a preview of what's on the way."
          />
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {upcomingTopics.map((post) => (
              <div
                key={post.title}
                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Newspaper className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                    {post.category}
                  </span>
                  <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--foreground)]">
                    {post.title}
                  </h3>
                  <span className="mt-2 inline-block text-sm font-medium text-neutral-400">
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a topic you'd like us to cover?"
        description="Reach out and let us know what you'd find useful."
      />
    </>
  );
}
