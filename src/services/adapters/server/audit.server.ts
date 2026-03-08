
import { apiClient } from "@/lib/apiClient";

export const auditServerService = {
    getAuditLogs: (filters: any, limit: number) => {
        const params = new URLSearchParams({ ...filters, limit: String(limit) });
        return apiClient.get(`/audit-logs?${params.toString()}`);
    },
    logEvent: (event: any) => {
        return apiClient.post('/audit-logs', event);
    }
};
