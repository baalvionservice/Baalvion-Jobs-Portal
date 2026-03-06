
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-Time Trade Monitoring & Operational OS | BAALVION",
  description: "Manage global trade operations in real-time with enterprise-grade security, AI analytics, and automated multi-currency solutions. Explore our unified service mesh for global commerce.",
  keywords: ["real-time trade monitoring", "AI analytics for trade", "enterprise trade dashboard", "global trade operating system"],
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
