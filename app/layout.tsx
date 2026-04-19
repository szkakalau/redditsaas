import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

const siteUrl =
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
      <body className="bg-white font-sans text-[#6B7280] antialiased">
        {children}
      </body>
    </html>
  );
}
