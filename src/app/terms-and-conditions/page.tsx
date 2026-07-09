import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description:
    "The terms that govern your use of the Techifyed website.",
  path: "/terms-and-conditions/",
});

const h2 = "mt-10 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]";
const p = "mt-3 leading-relaxed text-neutral-600";

export default function TermsAndConditionsPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" align="left" eyebrow="Legal" title="Terms and Conditions" />
        <p className="mt-4 text-sm text-neutral-400">Last updated: July 7, 2026</p>

        <p className={p}>
          These terms govern your use of techifyed.com. By using this
          website, you agree to them. They don&apos;t apply to services
          delivered under a signed client agreement or statement of work,
          which govern those engagements separately.
        </p>

        <h2 className={h2}>Use of this website</h2>
        <p className={p}>
          This site is provided for informational purposes — to describe
          our services, share our work, and let you get in touch. You
          agree not to misuse the site, attempt to disrupt it, or access
          it in a way that could damage or overburden it.
        </p>

        <h2 className={h2}>Intellectual property</h2>
        <p className={p}>
          The content on this website — including text, graphics, logos,
          and images — belongs to {siteConfig.name} or is used with
          permission, and is protected by applicable copyright and
          trademark law. You may not reproduce or redistribute it without
          our written consent.
        </p>

        <h2 className={h2}>Service engagements</h2>
        <p className={p}>
          Descriptions of our services on this website are illustrative.
          Scope, pricing, timelines, and deliverables for any actual
          project are defined in a separate written agreement between
          {" "}{siteConfig.name} and the client.
        </p>

        <h2 className={h2}>No warranties</h2>
        <p className={p}>
          This website and its content are provided &quot;as is&quot;
          without warranties of any kind, express or implied. We don&apos;t
          guarantee the site will be error-free or uninterrupted.
        </p>

        <h2 className={h2}>Limitation of liability</h2>
        <p className={p}>
          To the fullest extent permitted by law, {siteConfig.name} is not
          liable for any indirect, incidental, or consequential damages
          arising from your use of this website.
        </p>

        <h2 className={h2}>Third-party links and services</h2>
        <p className={p}>
          This site may link to or use third-party services (for example,
          Google&apos;s Gemini API for the AI assistant). We aren&apos;t
          responsible for the content or practices of those third parties.
        </p>

        <h2 className={h2}>Governing law</h2>
        <p className={p}>
          These terms are governed by the laws of the State of Florida,
          USA, without regard to conflict-of-law principles.
        </p>

        <h2 className={h2}>Changes to these terms</h2>
        <p className={p}>
          We may update these terms from time to time. Continued use of
          the site after changes means you accept the updated terms.
        </p>

        <h2 className={h2}>Contact us</h2>
        <p className={p}>
          {siteConfig.name}
          <br />
          {siteConfig.address}
          <br />
          <a
            href={`mailto:${siteConfig.emails.info}`}
            className="text-primary-600 hover:underline"
          >
            {siteConfig.emails.info}
          </a>{" "}
          · {siteConfig.phone}
        </p>
      </Container>
    </section>
  );
}
