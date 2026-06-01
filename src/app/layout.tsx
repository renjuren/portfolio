import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Renju Joseph | Senior Product Designer",
  description:
    "Senior Product Designer building enterprise SaaS for data-dense, complex workflows. UX/UI Design, Product Strategy, and Rapid Prototyping.",
  keywords: [
    "product designer",
    "UX designer",
    "UI designer",
    "enterprise SaaS",
    "design systems",
    "interaction design",
    "Renju Joseph",
  ],
  openGraph: {
    title: "Renju Joseph | Senior Product Designer",
    description:
      "Senior Product Designer building enterprise SaaS for data-dense, complex workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
