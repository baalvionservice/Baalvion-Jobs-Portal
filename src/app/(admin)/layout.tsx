'use client';

import AdminShell from "@/components/layout/AdminShell";
import { RoleGuard } from "@/features/auth/components/RoleGuard";
import { ScrollRestoration } from '@/components/system/ScrollRestoration';
import { TenantProvider } from "@/context/TenantContext";
import { NotificationProvider } from "@/context/NotificationContext";
import { TenantGuard } from "@/lib/tenant/tenant.guard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleGuard allowedRoles={["ADMIN", "SUPER_ADMIN", "RECRUITER", "FINANCE", "INTERVIEWER"]}>
      <TenantProvider>
        <NotificationProvider>
          <ScrollRestoration />
          <TenantGuard>
            <AdminShell>
              {children}
            </AdminShell>
          </TenantGuard>
        </NotificationProvider>
      </TenantProvider>
    </RoleGuard>
  );
}
