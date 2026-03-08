import { apiClient } from "@/lib/apiClient";
import { TableQuery } from "@/components/system/DataTable";
import { Student } from "@/modules/students/domain/student.entity";

export const campusServerService = {
  getAIMatches: (query: TableQuery) => apiClient.get(`/campus/ai-matches?${new URLSearchParams(query as any)}`),
  getRecentPlacements: (limit: number): Promise<Student[]> => apiClient.get(`/campus/recent-placements?limit=${limit}`),
};
