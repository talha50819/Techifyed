import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #3b0764 0%, #7e22ce 55%, #d946ef 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            color: "white",
            letterSpacing: -2,
          }}
        >
          Techifyed
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 34,
            color: "rgba(255,255,255,0.88)",
          }}
        >
          Digital Agency for Web, Mobile, Design & Growth
        </div>
      </div>
    ),
    { ...size }
  );
}
