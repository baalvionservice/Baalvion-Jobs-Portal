import { ApiAdapter } from '../api.adapter';
import { authServerService } from './auth.server';
import { userServerService } from './user.server';
import { candidateServerService } from './candidate.server';
import { applicationServerService } from './application.server';
import { interviewServerService } from './interview.server';
import { offerServerService } from './offer.server';
import { analyticsServerService } from './analytics.server';
import { auditServerService } from './audit.server';
import { notificationServerService } from './notification.server';
import { projectServerService } from './project.server';
import { organizationServerService } from './organization.server';
import { paymentServerService } from './payment.server';
import { teamServerService } from './team.server';
import { talentServerService } from './talent.server';
import { noteServerService } from './note.server';
import { documentServerService } from './document.server';
import { studentServerService } from './student.server';
import { campusServerService } from './campus.server';

// This adapter proxies calls to a real backend.
// Each method will eventually use the apiClient to make HTTP requests.
// Placeholders are added for methods not yet implemented on the server-side
// to ensure the adapter conforms to the ApiAdapter interface.
export const serverAdapter: ApiAdapter = {
    ...authServerService,
    ...userServerService,
    ...candidateServerService,
    ...applicationServerService,
    ...interviewServerService,
    ...offerServerService,
    ...analyticsServerService,
    ...auditServerService,
    ...notificationServerService,
    ...projectServerService,
    ...organizationServerService,
    ...paymentServerService,
    ...teamServerService,
    ...talentServerService,
    ...noteServerService,
    ...documentServerService,
    ...studentServerService,
    ...campusServerService,
    sendEmail: (email: string, subject: string, body: string) => Promise.reject(new Error("Not implemented")),
    getJobs: (params: any) => Promise.reject(new Error("Not implemented")),
    create: (user: any) => Promise.reject(new Error("Not implemented")),
    update: (id: string, user: any) => Promise.reject(new Error("Not implemented")),
    getColleges: (query) => Promise.reject(new Error("Not implemented")),
    getAllColleges: () => Promise.reject(new Error("Not implemented")),
    createCollege: (data) => Promise.reject(new Error("Not implemented")),
    updateCollege: (data) => Promise.reject(new Error("Not implemented")),
    deleteCollege: (collegeId) => Promise.reject(new Error("Not implemented")),
    getStudents: (query) => Promise.reject(new Error("Not implemented")),
    getAllStudents: () => Promise.reject(new Error("Not implemented")),
    createStudent: (data) => Promise.reject(new Error("Not implemented")),
    updateStudent: (data) => Promise.reject(new Error("Not implemented")),
    deleteStudent: (studentId) => Promise.reject(new Error("Not implemented")),
    getPendingPlacements: () => Promise.reject(new Error("Not implemented")),
    getApprovedPlacements: () => Promise.reject(new Error("Not implemented")),
    approvePlacement: (id, updates) => Promise.reject(new Error("Not implemented")),
    getAIMatches: (query) => Promise.reject(new Error("Not implemented")),
    getRecentPlacements: (limit) => Promise.reject(new Error("Not implemented")),
};
