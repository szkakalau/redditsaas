import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

/** Safe absolute URL for metadata (Vercel may expose empty or odd VERCEL_URL during some build steps). */
function getMetadataBase(): URL {
  const raw = process.env.VERCEL_URL?.trim();
  if (!raw) {
    return new URL("http://localhost:3000");
  }
  const host = raw.replace(/^https?:\/\//i, "").replace(/\/$/, "");
  if (!host) {
    return new URL("http://localhost:3000");
  }
  return new URL(`https://${host}`);
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Reddit Marketing Agency for Startups | Reddit Growth Engine",
  description:
    "We help startups get their first customers from Reddit using native content and engagement.",
  openGraph: {
    title: "Reddit Marketing Agency for Startups | Reddit Growth Engine",
    description:
      "We help startups get their first customers from Reddit using native content and engagement.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddit Marketing Agency for Startups | Reddit Growth Engine",
    description:
      "We help startups get their first customers from Reddit using native content and engagement.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="touch-manipulation overflow-x-hidden bg-white font-sans text-[#6B7280] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
