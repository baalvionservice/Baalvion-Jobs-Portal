
import { JobStatus } from "@/lib/talent-acquisition";

export interface AnalyticsFilters {
  dateRange?: { from?: Date; to?: Date };
  countries?: string[];
  departmentIds?: string[];
}

export interface KpiData {
  totalActiveJobs: { value: number; change: number };
  totalApplications: { value: number; change: number };
  avgTimeToFill: { value: number; change: number };
  overallConversionRate: { value: number; change: number };
}

export interface AnalyticsData {
  kpis: KpiData;
  applicationsTrend: { date: string; applications: number }[];
  statusDistribution: { name: JobStatus; value: number; fill: string }[];
  departmentHiring: { department: string; hires: number }[];
}
