import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#231C17",
      }}
    >
      <span
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "100px",
          fontWeight: 700,
          color: "#C2882F",
        }}
      >
        B
      </span>
    </div>,
    { ...size }
  );
}
