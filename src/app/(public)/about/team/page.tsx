
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TeamGrid } from '@/modules/team/components/TeamGrid';
import { teamService } from '@/services/team.service';
import { ArrowRight, Zap } from 'lucide-react';
import React from 'react';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Meet the Team | Baalvion',
  description: 'The creators, innovators, and problem-solvers shaping our mission to build the intelligent infrastructure for global talent.',
};

const principles = [
    "Meritocracy: We believe the best ideas win, regardless of who or where they come from.",
    "Ownership: We are a team of owners. We take accountability for our work from start to finish.",
    "Excellence: We are obsessed with quality and hold ourselves to the highest standards in every detail.",
    "Long-Term Vision: We build for the decade, not just the quarter, creating resilient and future-proof systems."
];

export default async function TeamPage() {
    const teamMembers = await teamService.getTeamMembers();
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "The Minds Behind Baalvion",
        "description": "Meet the team of creators, innovators, and problem-solvers at Baalvion.",
        "url": "https://jobs.baalvion.com/about/team",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": teamMembers.map((member) => ({
                "@type": "Person",
                "name": member.name,
                "jobTitle": member.role,
                "image": member.image,
                "url": member.socials.linkedin,
                "description": member.tagline,
                "knowsAbout": member.expertise
            }))
        }
    };

  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="py-24 sm:py-32 bg-muted/40">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Minds Behind Baalvion</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                We are a collective of engineers, designers, and strategists united by a single goal: to build the intelligent infrastructure that connects exceptional talent with borderless opportunity.
            </p>
        </div>
      </section>
      
      {/* Team Grid */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4">
            <TeamGrid members={teamMembers} />
        </div>
      </section>
      
      {/* Leadership Principles Section */}
      <section className="py-24 sm:py-32 bg-muted/40">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Leadership Principles</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our principles guide our decisions, our code, and our culture.
                </p>
            </div>
            <div className="grid gap-6">
                {principles.map((principle, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <Zap className="h-6 w-6 text-primary mt-1 shrink-0" />
                        <p className="text-lg text-muted-foreground">{principle}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Join Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">We're always looking for talented individuals who are passionate about building the future of work.</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/careers">
                Explore Open Roles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
