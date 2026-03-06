import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Automation Engine | Sovereign Law Mesh",
  description: "Automated checks for screening vendors, shipments, and transactions in real-time. Secure digital documentation with full institutional audit trails and regulatory monitoring.",
  keywords: ["trade compliance automation", "global trade regulations", "B2B risk management", "sanctions screening", "KYB verification"],
};

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
