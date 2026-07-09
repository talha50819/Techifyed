import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Information Security Policy",
  description:
    "An overview of how Techifyed approaches information security for its website, clients, and projects.",
  path: "/information-security-policy/",
});

const h2 = "mt-10 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]";
const p = "mt-3 leading-relaxed text-neutral-600";
const ul = "mt-3 list-disc space-y-2 pl-5 leading-relaxed text-neutral-600";

export default function InformationSecurityPolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="Legal"
          title="Information Security Policy"
        />
        <p className="mt-4 text-sm text-neutral-400">Last updated: July 7, 2026</p>

        <p className={p}>
          {siteConfig.name} takes reasonable, practical steps to protect
          the information entrusted to us — both on this website and in
          the client work we deliver. This page summarizes our approach at
          a high level; specific technical and contractual security
          commitments for a given engagement are defined in that
          project&apos;s agreement.
        </p>

        <h2 className={h2}>Website security</h2>
        <ul className={ul}>
          <li>This site is served entirely over HTTPS.</li>
          <li>
            It is published as a static site, which minimizes server-side
            attack surface compared to a dynamic application.
          </li>
          <li>
            Access to the site&apos;s source code and hosting is restricted
            to authorized team members.
          </li>
        </ul>

        <h2 className={h2}>Data handling</h2>
        <p className={p}>
          We collect the minimum information needed to respond to
          inquiries submitted through this site. See our{" "}
          <a href="/privacy-policy/" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>{" "}
          for details on what we collect and how it&apos;s used.
        </p>

        <h2 className={h2}>Security in client engagements</h2>
        <ul className={ul}>
          <li>Access controls and least-privilege practices on project systems.</li>
          <li>Code review as part of our development process.</li>
          <li>Keeping dependencies and infrastructure up to date with security patches.</li>
          <li>Secure handling of credentials and client data — never stored or shared beyond what a project requires.</li>
        </ul>

        <h2 className={h2}>Incident response</h2>
        <p className={p}>
          If we become aware of a security incident affecting client or
          visitor data, we will investigate promptly and notify affected
          parties in line with applicable legal requirements.
        </p>

        <h2 className={h2}>Reporting a concern</h2>
        <p className={p}>
          If you believe you&apos;ve found a security issue affecting this
          website, please report it to{" "}
          <a
            href={`mailto:${siteConfig.emails.support}`}
            className="text-primary-600 hover:underline"
          >
            {siteConfig.emails.support}
          </a>
          .
        </p>

        <h2 className={h2}>Policy review</h2>
        <p className={p}>
          We review this policy periodically and update it as our
          practices evolve.
        </p>
      </Container>
    </section>
  );
}
