import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BizVision — Software Development Helsinki";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",
        backgroundColor: "#231C17",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "system-ui, sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          color: "#C2882F",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        bizvision.fi
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "system-ui, sans-serif",
          fontSize: "80px",
          fontWeight: 700,
          color: "#C2882F",
          letterSpacing: "-2px",
          lineHeight: 1,
          marginBottom: "28px",
        }}
      >
        BizVision
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "system-ui, sans-serif",
          fontSize: "28px",
          fontWeight: 400,
          color: "#F7F4EE",
          lineHeight: 1.4,
          maxWidth: "820px",
          opacity: 0.8,
        }}
      >
        Software development for businesses and public sector
      </div>
    </div>,
    { ...size }
  );
}
