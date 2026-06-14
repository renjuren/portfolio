import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Renju Joseph",
  description: "A curated archive of platforms, design systems, and growth experiments.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
