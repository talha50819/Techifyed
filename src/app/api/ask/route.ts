import { NextRequest, NextResponse } from "next/server";
import { services } from "@/data/services";

const MODEL = "gemini-2.5-flash";
const MAX_QUESTION_LENGTH = 300;

const SYSTEM_INSTRUCTION = `You are the AI assistant embedded on the Techifyed website. Techifyed is a full-service digital agency offering: ${services
  .map((s) => s.title)
  .join(
    ", "
  )}. Answer the visitor's question thoroughly in a single well-developed paragraph (roughly 4-6 sentences), plain language, no markdown, no bullet points. Wherever genuinely relevant, explain how Techifyed can help with the topic and encourage the visitor to reach out via the Contact page — but do not force a pitch if the question has nothing to do with Techifyed's services. Never invent specific pricing, timelines, or client names.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI assistant is not configured." },
      { status: 500 }
    );
  }

  let question: string;
  try {
    const body = await req.json();
    question = String(body?.question ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!question) {
    return NextResponse.json({ error: "Please enter a question." }, { status: 400 });
  }
  if (question.length > MAX_QUESTION_LENGTH) {
    question = question.slice(0, MAX_QUESTION_LENGTH);
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          contents: [{ role: "user", parts: [{ text: question }] }],
          generationConfig: { maxOutputTokens: 700, temperature: 0.6 },
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "The AI assistant is unavailable right now." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const answer: string | undefined =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text).join("").trim();

    if (!answer) {
      return NextResponse.json(
        { error: "The AI assistant couldn't come up with an answer. Try rephrasing." },
        { status: 502 }
      );
    }

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      { error: "The AI assistant is unavailable right now." },
      { status: 502 }
    );
  }
}
