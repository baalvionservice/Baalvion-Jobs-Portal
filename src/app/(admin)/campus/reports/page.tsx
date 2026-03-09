'use client';

import { useAnalytics } from '@/modules/analytics/hooks/useAnalytics';
import { AnalyticsFilters } from '@/modules/analytics/components/AnalyticsFilters';
import { useState } from 'react';
import { AnalyticsFilters as IAnalyticsFilters } from '@/modules/analytics/domain/analytics.entity';
import { subDays } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { PlacementSuccessPie } from '@/modules/campus/reports/components/PlacementSuccessPie';
import { CollegeStatsBarChart } from '@/modules/campus/reports/components/CollegeStatsBarChart';
import { JobDistributionBarChart } from '@/modules/campus/reports/components/JobDistributionBarChart';

function ReportsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Skeleton className="h-80 w-full" />
        <Skeleton className="h-80 w-full lg:col-span-2" />
      </div>
      <Skeleton className="h-96 w-full" />
    </div>
  );
}

export default function CampusReportsPage() {
  const [filters, setFilters] = useState<IAnalyticsFilters>({
    dateRange: { from: subDays(new Date(), 90), to: new Date() },
    countries: [],
    departmentIds: [],
  });

  const { data, isLoading } = useAnalytics(filters);

  const placementRate = Number(data?.placementSuccessRate ?? 0);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Campus Placement Analytics
        </h1>
        <p className="text-muted-foreground">
          Visualize campus recruitment data and performance metrics.
        </p>
      </div>

      <AnalyticsFilters filters={filters} setFilters={setFilters} />

      {isLoading || !data ? (
        <ReportsSkeleton />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <PlacementSuccessPie rate={placementRate} />

            <div className="lg:col-span-2">
              <CollegeStatsBarChart data={data?.collegeWiseStats ?? []} />
            </div>
          </div>

          <JobDistributionBarChart data={data?.jobDistribution ?? []} />
        </div>
      )}
    </div>
  );
}