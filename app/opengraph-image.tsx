import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const dynamic = "force-static";
export const alt = `${SITE_NAME} — Luxury Event Management in Bhubaneswar`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0A0908 0%, #1a1510 55%, #4D3826 100%)",
          padding: "64px",
          color: "#F5EFE3",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#D4AF37",
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 28, color: "#D5CBB7", maxWidth: 900 }}>
            Luxury Wedding & Corporate Event Planners in Bhubaneswar, Odisha
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            color: "#E7D2A2",
          }}
        >
          <span>Bhubaneswar · Odisha · India</span>
          <span style={{ color: "#D4AF37" }}>Creating Divine Celebrations</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
