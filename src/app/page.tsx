import { Hero } from "@/app/components/Hero";
import { Platform } from "@/app/components/Platform";
import { Marketplace } from "@/app/components/Marketplace";
import { Infrastructure } from "@/app/components/Infrastructure";
import { TradeVisualization } from "@/app/components/TradeVisualization";
import { Intelligence } from "@/app/components/Intelligence";
import { Ecosystem } from "@/app/components/Ecosystem";
import { Roadmap } from "@/app/components/Roadmap";
import { Company } from "@/app/components/Company";
import { CTA } from "@/app/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Platform />
      <Marketplace />
      <Infrastructure />
      <TradeVisualization />
      <Intelligence />
      <Ecosystem />
      <Roadmap />
      <Company />
      <CTA />
    </main>
  );
}
