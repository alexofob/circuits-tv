/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

import Logo from "@/public/circuits-tv-logo.png";
import { env } from "@/env";

export const runtime = "edge";
export const alt = "Experience the Cinematic Universe on Mobile.";
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)",
        }}
      >
        <img
          src={`${env.NEXT_PUBLIC_APP_URL}/${Logo.src}`}
          alt="Circuits TV Logo"
          tw="mb-2 opacity-95"
          width={320}
          height={320}
        />
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 900,
            background:
              "linear-gradient(90deg, rgb(241,90,36), rgb(255, 255, 255))",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Circuits TV
        </h1>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
            color: "white",
          }}
        >
          Experience the Cinematic Universe on Mobile.
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
