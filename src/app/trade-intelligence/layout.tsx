import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Predictive Trade Analytics | AI-Driven Market Insights",
  description: "Leverage AI-driven insights to forecast demand, evaluate vendor risk, and optimize global trade operations with data-driven decision modeling and P&L impact analysis.",
  keywords: ["trade intelligence platform", "AI trade insights", "global trade analytics", "predictive trade risk management", "supply chain forecasting"],
};

export default function TradeIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
