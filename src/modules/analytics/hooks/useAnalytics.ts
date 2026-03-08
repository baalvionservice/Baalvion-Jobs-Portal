
'use client';

import useSWR from 'swr';
import { analyticsService } from '../services/analytics.adapter';
import { AnalyticsFilters } from '../domain/analytics.entity';

// Key creator for SWR to re-fetch when filters change
const getAnalyticsKey = (filters: AnalyticsFilters) => {
    // We stringify the filters to create a stable, unique key for caching.
    return ['analyticsDashboard', JSON.stringify(filters)];
};

export const useAnalytics = (filters: AnalyticsFilters) => {
    // SWR will fetch the data using the key and fetcher function.
    // It automatically handles caching and revalidation.
    const { data, error, isLoading } = useSWR(
        getAnalyticsKey(filters),
        () => analyticsService.getDashboardData(filters)
    );

    return {
        data,
        isLoading,
        isError: error,
    };
};
