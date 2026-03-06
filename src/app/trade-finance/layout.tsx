import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Finance Hub | Global Settlement & FX Optimization",
  description: "Sovereign-grade payment routing, neural FX optimization, and global liquidity settlement mesh for institutional international trade. Secure your cross-border capital.",
  keywords: ["trade finance", "cross-border payment solutions", "FX optimization", "institutional liquidity", "LC automation"],
};

export default function TradeFinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
