import { apiClient } from "@/lib/apiClient";
import { TeamMember } from "@/lib/team.data";

export const teamServerService = {
    getTeamMembers: (): Promise<TeamMember[]> => {
        return apiClient.get('/team-members');
    },
    getTeamMemberById: (id: string): Promise<TeamMember | undefined> => {
        return apiClient.get(`/team-members/${id}`);
    },
    createTeamMember: (data: Omit<TeamMember, 'id'>) => {
        return apiClient.post('/team-members', data);
    },
    updateTeamMember: (id: string, data: Partial<TeamMember>) => {
        return apiClient.put(`/team-members/${id}`, data);
    },
    deleteTeamMember: (id: string) => {
        return apiClient.delete(`/team-members/${id}`);
    },
};
