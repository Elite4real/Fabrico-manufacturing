// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // change to your real domain
  metadataBase: new URL("https://fabrico.example.com"),
  title: {
    default: "Fabrico — Smart Manufacturing",
    template: "%s · Fabrico",
  },
  description:
    "Plan, track, and optimize production with an integrated manufacturing platform.",
  applicationName: "Fabrico",
  keywords: [
    "manufacturing",
    "MRP",
    "MES",
    "production planning",
    "factory",
    "quality",
    "inventory",
  ],
  authors: [{ name: "Fabrico" }],
  creator: "Fabrico",
  publisher: "Fabrico",
  category: "Manufacturing",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fabrico — Smart Manufacturing",
    description:
      "From procurement to shop-floor execution—integrated, reliable, and fast.",
    url: "/",
    siteName: "Fabrico",
    images: [
      {
        url: "/og.jpg", // put an image in /public
        width: 1200,
        height: 630,
        alt: "Fabrico preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabrico — Smart Manufacturing",
    description:
      "From procurement to shop-floor execution—integrated, reliable, and fast.",
    images: ["/og.jpg"],
    creator: "@yourhandle",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1720" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* Map Next/font variables to your existing tokens so globals.css uses Geist */}
        <style
          // You can move this into :root in globals.css if you prefer
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                --font-mono: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
              }
            `,
          }}
        />

        {children}

        {/* Organization schema for richer snippets (optional but nice) */}
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fabrico",
            url: "https://fabrico.example.com",
            logo: "https://fabrico.example.com/icon-512.png",
            sameAs: [
              "https://twitter.com/yourhandle",
              "https://www.linkedin.com/company/yourcompany",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
