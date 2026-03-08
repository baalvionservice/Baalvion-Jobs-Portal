
import { apiClient } from "@/lib/apiClient";
import { Document, DocumentType, DocumentStatus } from "@/types";

// This is a placeholder for the real API service.
export const documentServerService = {
    async getDocumentsForCandidate(candidateId: string): Promise<Document[]> {
        const response = await apiClient.get(`/candidates/${candidateId}/documents`);
        if (!response.success) throw new Error(response.error || "Failed to fetch documents");
        return response.data || [];
    },
    async getAllDocuments(): Promise<Document[]> {
        const response = await apiClient.get(`/documents`);
        if (!response.success) throw new Error(response.error || "Failed to fetch all documents");
        return response.data || [];
    },
    async requestDocumentDeletion(documentId: string): Promise<{ success: boolean }> {
        return apiClient.post(`/documents/${documentId}/request-deletion`, {});
    },
    async updateDocumentStatus(documentId: string, status: 'VERIFIED' | 'REJECTED'): Promise<{ success: boolean }> {
        return apiClient.put(`/documents/${documentId}/status`, { status });
    },
    async approveDeletion(documentId: string): Promise<{ success: boolean }> {
        return apiClient.post(`/documents/${documentId}/approve-deletion`, {});
    },
    async uploadDocument(data: any): Promise<Document> {
        // File uploads are typically handled with multipart/form-data
        // This is a simplified representation.
        const response = await apiClient.post('/documents/upload', data);
        if (!response.success) throw new Error(response.error || "Failed to upload document");
        return response.data!;
    }
};
