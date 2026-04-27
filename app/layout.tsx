import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "./globals.css";

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
    <html lang="en">
      <body className="touch-manipulation overflow-x-hidden bg-white font-sans text-[#6B7280] antialiased">
        {children}
      </body>
    </html>
  );
}
