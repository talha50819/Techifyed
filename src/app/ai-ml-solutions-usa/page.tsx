import AiMlLandingContent from "@/components/AiMlLandingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI/ML Solutions in USA",
  description:
    "Techifyed provides AI and machine learning solutions in the USA, including AI chatbots, LLM and RAG application development, process automation, custom model development, data pipelines, and AI model monitoring.",
  path: "/ai-ml-solutions-usa/",
});

export default function AiMlSolutionsUsaPage() {
  return (
    <AiMlLandingContent
      h1="AI/ML Solutions in USA — Practical AI Built Around Your Business Data"
      heroLine="Your AI feature should not just impress in a demo. It should run reliably in production, stay grounded in your real data, and keep working after launch. Techifyed helps businesses across the United States build AI chatbots, automation, and custom models with strategy, engineering, and ongoing monitoring under one roof."
      regionName="USA"
      regionSlug="usa"
      isHub
    />
  );
}
