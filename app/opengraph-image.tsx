import { ImageResponse } from "next/og";

export const alt = "Brandschutz Köln – Brandschutz beginnt mit Expertise | H&S+";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #9B2423 0%, #7a1c1b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 56,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: "90%",
            lineHeight: 1.2,
          }}
        >
          Brandschutz Köln
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.95)",
            fontSize: 28,
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Brandschutz beginnt mit Expertise
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: 22,
            marginTop: 24,
          }}
        >
          H&S+ · Health and Safety +
        </div>
      </div>
    ),
    { ...size }
  );
}
