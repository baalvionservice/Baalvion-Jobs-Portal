import { ApplicationStatus } from '@/types';
import { PaginatedResponse as DataTablePaginatedResponse } from '@/components/system/DataTable';


export type CandidateStage = ApplicationStatus;

export const candidateStages: CandidateStage[] = ["APPLIED", "SCREENED", "TECHNICAL_ROUND", "HR_ROUND", "FINAL_ROUND", "OFFER", "HIRED", "REJECTED"];

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  experienceYears: number;
  stage: CandidateStage;
  rating: number;
  createdAt: string;
  tenantId: string;
  avatarUrl?: string; // Added for avatar display
}

// Use the generic PaginatedResponse from the DataTable system
export type PaginatedCandidatesResponse = DataTablePaginatedResponse<Candidate>;
