import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure B2B Infrastructure & API Core | BAALVION",
  description: "Scalable API-first architecture designed for global trade compliance, banking integration, and enterprise-grade cloud deployment. SOC2 and ISO 27001 ready.",
  keywords: ["secure B2B infrastructure", "trade compliance technology", "cloud trade platform", "API-based trade solutions", "institutional cybersecurity"],
};

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return (
    <section aria-label="Infrastructure Node">
      {children}
    </section>
  );
}
