
import { apiClient } from "@/services/api-client";
import { ProjectService, ProjectFilters } from "./project.service";

export const projectServerService: ProjectService = {
    async getProjects(filters: ProjectFilters) {
        const query = new URLSearchParams(filters as any).toString();
        return apiClient.get(`/projects?${query}`);
    },
    async getProjectById(id: string) {
        return apiClient.get(`/projects/${id}`);
    }
};
