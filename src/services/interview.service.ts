
import { adapter } from './adapter';
import { InterviewStatus, Interview } from '@/modules/interviews/domain/interview.entity';

export const interviewService = {
  getAllInterviews: () => adapter.getAllInterviews(),
  getInterviewsForCandidate: (candidateId: string): Promise<Interview[]> => {
    return adapter.getInterviewsForCandidate(candidateId);
  },
  schedule: (data: any) => adapter.scheduleInterview(data),
  updateStatus: (id: string, status: InterviewStatus) => adapter.updateInterviewStatus(id, status),
  submitFeedback: (id: string, feedback: string, rating: number) => adapter.submitInterviewFeedback(id, feedback, rating),
};
