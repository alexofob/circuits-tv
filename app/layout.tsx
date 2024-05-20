import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
    startupImage: [siteConfig.startupImage],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
  },
  icons: {
    shortcut: "/icons/favicon-16x16.png",
  },
  metadataBase: new URL(siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: "#F15A24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
