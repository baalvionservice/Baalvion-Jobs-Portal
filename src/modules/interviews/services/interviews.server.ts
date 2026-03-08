
import { apiClient } from "@/services/api-client";
import { Interview, InterviewStatus } from "../domain/interview.entity";

// This is a placeholder for the real API service.
// The methods are named to match the mock service for adapter compatibility.
export const interviewsServerService = {
  async getAllInterviews(): Promise<Interview[]> {
    return apiClient.get('/interviews');
  },

  async schedule(data: Omit<Interview, 'id' | 'createdAt' | 'status'>): Promise<Interview> {
    return apiClient.post('/interviews', data);
  },

  async updateStatus(id: string, status: InterviewStatus): Promise<void> {
    await apiClient.put(`/interviews/${id}/status`, { status });
  },

  async submitFeedback(id: string, feedback: string, rating: number): Promise<void> {
    await apiClient.post(`/interviews/${id}/feedback`, { feedback, rating });
  },
};
