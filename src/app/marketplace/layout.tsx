import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global B2B Marketplace | Verified Sourcing Network",
  description: "Access thousands of verified suppliers and manufacturers. Leverage AI-driven vendor scoring based on compliance, delivery history, and reliability metrics for global commodity trading.",
  keywords: ["global B2B marketplace", "verified suppliers", "vendor rating system", "AI-powered sourcing", "B2B commodity trading"],
};

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
