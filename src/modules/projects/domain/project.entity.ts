

export type ProjectStatus = 'OPEN' | 'ACTIVE' | 'COMPLETED' | 'DRAFT' | 'GOVERNANCE_REVIEW';

export interface ProjectRole {
    id: string;
    title: string;
    compensation: string;
    slots: number;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    budget: number;
    currency: string;
    status: ProjectStatus;
    requiredSkills: string[];
    owner: string;
    createdAt: string;
    updatedAt: string;
    roles: ProjectRole[];
}
