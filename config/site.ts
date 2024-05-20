import { env } from "@/env";

// `env` is fully typesafe and provides autocompletion

const siteUrl = env.NEXT_PUBLIC_APP_URL || "https://circuitstv.vercel.app";

export const siteConfig = {
  name: "Circuits TV",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image`,
  startupImage: `${siteUrl}/logo.svg`,
  description: "Experience Cinematic Universe on Mobile.",
  links: {
    twitter: "https://twitter.com/circuits-tv",
  },
};

export type SiteConfig = typeof siteConfig;
