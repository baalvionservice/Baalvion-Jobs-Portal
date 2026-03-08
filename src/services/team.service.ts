
import { adapter } from './adapter';
import { TeamMember } from '@/lib/team.data';

export const teamService = {
  getTeamMembers: (): Promise<TeamMember[]> => adapter.getTeamMembers(),
  getTeamMemberById: (id: string): Promise<TeamMember | undefined> => adapter.getTeamMemberById(id),
  createTeamMember: (data: Omit<TeamMember, 'id'>) => adapter.createTeamMember(data),
  updateTeamMember: (id: string, data: Partial<TeamMember>) => adapter.updateTeamMember(id, data),
  deleteTeamMember: (id: string) => adapter.deleteTeamMember(id),
};
