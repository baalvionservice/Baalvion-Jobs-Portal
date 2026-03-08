
import { apiClient } from "@/lib/apiClient";
import { ProjectService, ProjectFilters } from "@/modules/projects/services/project.service";
import { Project, ProjectStatus } from "@/modules/projects/domain/project.entity";

export const projectServerService: ProjectService = {
    async getProjects(filters: ProjectFilters): Promise<Project[]> {
        const query = new URLSearchParams(filters as any).toString();
        const response = await apiClient.get(`/projects?${query}`);
        if (!response.success) throw new Error(response.error || "Failed to fetch projects");
        return response.data || [];
    },
    async getProjectById(id: string): Promise<Project | undefined> {
        const response = await apiClient.get(`/projects/${id}`);
        if (!response.success) return undefined;
        return response.data || undefined;
    },
    async updateProjectStatus(id: string, status: ProjectStatus): Promise<Project> {
        const response = await apiClient.put(`/projects/${id}/status`, { status });
        if (!response.success) throw new Error(response.error || "Failed to update project status");
        return response.data!;
    }
};
