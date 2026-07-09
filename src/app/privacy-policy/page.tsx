import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Techifyed collects, uses, and protects information submitted through this website.",
  path: "/privacy-policy/",
});

const h2 = "mt-10 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--foreground)]";
const p = "mt-3 leading-relaxed text-neutral-600";
const ul = "mt-3 list-disc space-y-2 pl-5 leading-relaxed text-neutral-600";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading as="h1" align="left" eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-4 text-sm text-neutral-400">Last updated: July 7, 2026</p>

        <p className={p}>
          This policy explains what information {siteConfig.name} (&quot;we,&quot;
          &quot;us&quot;) collects through techifyed.com, how it&apos;s used, and the
          choices you have. It applies to this website only, not to work
          product delivered under a separate client agreement.
        </p>

        <h2 className={h2}>Information we collect</h2>
        <ul className={ul}>
          <li>
            <strong>Contact form:</strong> name, email address, phone number
            (optional), service of interest, and any message you submit.
          </li>
          <li>
            <strong>Direct email:</strong> anything you send to our
            info, sales, support, or hr addresses.
          </li>
          <li>
            <strong>AI assistant:</strong> if you use the &quot;Ask&quot; bar on
            our homepage, the text you type is sent directly from your
            browser to Google&apos;s Gemini API to generate a response.
          </li>
        </ul>

        <h2 className={h2}>How we use it</h2>
        <p className={p}>
          We use contact and email information to respond to inquiries,
          discuss potential projects, and provide requested services. We do
          not sell your information to third parties.
        </p>

        <h2 className={h2}>The AI assistant</h2>
        <p className={p}>
          Questions submitted through the homepage AI bar are sent directly
          from your browser to Google&apos;s Gemini API to generate an answer.
          We do not store these questions or answers on our own servers.
          That exchange is subject to Google&apos;s own privacy practices,
          available at{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            policies.google.com/privacy
          </a>
          . Avoid submitting personal or confidential information through
          the AI bar.
        </p>

        <h2 className={h2}>Third-party service providers</h2>
        <p className={p}>
          We use third-party providers to operate this site and process
          contact form submissions (currently Web3Forms) and to power the
          AI assistant (Google Gemini). These providers process data on our
          behalf and are subject to their own privacy and security
          practices.
        </p>

        <h2 className={h2}>Cookies and tracking</h2>
        <p className={p}>
          This website does not currently use advertising or third-party
          tracking cookies. If that changes — for example, if we add
          analytics — we will update this policy accordingly.
        </p>

        <h2 className={h2}>Data retention</h2>
        <p className={p}>
          We retain contact form submissions and correspondence for as long
          as reasonably necessary to respond to your inquiry and maintain
          business records, unless you request earlier deletion.
        </p>

        <h2 className={h2}>Your choices</h2>
        <p className={p}>
          To request access to, correction of, or deletion of information
          you&apos;ve submitted to us, email{" "}
          <a
            href={`mailto:${siteConfig.emails.info}`}
            className="text-primary-600 hover:underline"
          >
            {siteConfig.emails.info}
          </a>
          .
        </p>

        <h2 className={h2}>Children&apos;s privacy</h2>
        <p className={p}>
          This website is intended for business audiences and is not
          directed at children under 13. We do not knowingly collect
          information from children.
        </p>

        <h2 className={h2}>Changes to this policy</h2>
        <p className={p}>
          We may update this policy from time to time. The &quot;last
          updated&quot; date above reflects the most recent revision.
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
