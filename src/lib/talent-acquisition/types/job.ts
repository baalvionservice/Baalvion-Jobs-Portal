
import { z } from 'zod';
import {
  EmploymentType,
  employmentTypes,
  ExperienceBand,
  experienceBands,
  JobStatus,
  jobStatuses,
  SalaryVisibility,
  WorkforceType,
  workforceTypes,
  WorkflowAuditEntry
} from '@/types/workflow.types';

export interface Job {
  id: string;
  requisitionCode: string;
  title: string;
  countryId: string;
  city: string;
  state?: string;
  departmentId: string;
  reportingTo?: string;
  employmentType: EmploymentType;
  experienceBand: ExperienceBand;
  workforceType: WorkforceType;
  salaryBand?: string;
  currency?: string;
  salaryVisibility: SalaryVisibility;
  equityEligible: boolean;
  relocationSupport: boolean;
  visaSponsorship: boolean;
  diversityCategory?: string;
  status: JobStatus;
  visibility: "public" | "internal";
  description: string;
  responsibilities: string[];
  qualifications: string[];
  isNew?: boolean; // UI-only flag
  publishStartDate?: string;
  publishEndDate?: string;
  createdBy?: string;
  approvedBy?: string;
  createdAt: string;
  updatedAt: string;
  // New fields for automation
  priority?: 'Low' | 'Medium' | 'High' | 'Critical';
  applicants?: number;
  workflowHistory?: WorkflowAuditEntry[];
  tenantId?: string;
};

export const jobFormSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long."),
  departmentId: z.string().min(2, "Department is required."),
  city: z.string().min(2, "Location is required."),
  description: z.string().min(50, "Description must be at least 50 characters."),
  responsibilities: z.array(z.string()).min(1, "At least one responsibility is required."),
  qualifications: z.array(z.string()).min(1, "At least one qualification is required."),
  employmentType: z.enum(employmentTypes),
  experienceBand: z.enum(experienceBands),
  workforceType: z.enum(workforceTypes),
  status: z.enum(jobStatuses),
  countryId: z.string().min(1, "Country is required"),
  equityEligible: z.boolean(),
  relocationSupport: z.boolean(),
  visaSponsorship: z.boolean(),
});

export type JobFormData = z.infer<typeof jobFormSchema>;
