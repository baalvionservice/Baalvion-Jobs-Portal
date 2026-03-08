
'use client';
import Image from 'next/image';
import { TeamMember } from '@/mocks/team.mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface TeamCardProps {
  member: TeamMember;
  onClick: () => void;
}

export function TeamCard({ member, onClick }: TeamCardProps) {
  return (
    <Card 
        className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border"
        onClick={onClick}
    >
      <div className="aspect-[4/5] relative">
          <Image 
            src={member.image} 
            alt={`Portrait of ${member.name}`}
            fill
            className="w-full h-full object-cover" 
            data-ai-hint={member.imageHint} 
          />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardHeader>
    </Card>
  );
}
