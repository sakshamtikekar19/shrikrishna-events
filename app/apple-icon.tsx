import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0908",
          color: "#D4AF37",
          fontSize: 72,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
          border: "8px solid #D4AF37",
        }}
      >
        SK
      </div>
    ),
    { ...size }
  );
}
