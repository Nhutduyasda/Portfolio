import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhut Duy | Full-stack Developer",
  description:
    "Full-stack developer building modern, scalable and immersive digital experiences. Specialized in React, Next.js, .NET 8, and WebGL architectures.",
  keywords: [
    "Nhut Duy",
    "Full-stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    ".NET 8",
    "ASP.NET Core",
    "SQL Server",
    "Three.js",
    "Creative Developer",
    "Portfolio",
  ],
  authors: [{ name: "Nhut Duy", url: "https://github.com/nhutduy" }],
  creator: "Nhut Duy",
  openGraph: {
    title: "Nhut Duy | Full-stack Developer",
    description:
      "Full-stack developer building modern, scalable and immersive digital experiences.",
    url: "https://nhutduy.dev",
    siteName: "Nhut Duy Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhut Duy | Full-stack Developer",
    description:
      "Full-stack developer building modern, scalable and immersive digital experiences.",
    creator: "@nhutduy_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050505] text-[#F8FAFC] font-sans overflow-x-hidden">
        <ThemeRegistry>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeRegistry>
      </body>
    </html>
  );
}
