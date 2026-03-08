
import { Project, ProjectStatus } from '@/modules/projects/domain/project.entity';
import { ProjectService } from '@/modules/projects/services/project.service';
import { PaginatedResponse, TableQuery } from '@/components/system/DataTable';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

let mockProjects: Project[] = [
  { id: 'proj-1', title: 'AI Resume Parser', description: 'Build an AI-powered resume parsing tool.', category: 'AI/ML', status: 'OPEN', requiredSkills: ['Python','TensorFlow','NLP'], budget: 10000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-2', title: 'Campus Portal', description: 'Create a university placement portal UI.', category: 'Web', status: 'ACTIVE', requiredSkills: ['React','Node.js','CSS'], budget: 8000, owner: 'Baalvion Campus', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-3', title: 'Job Matching AI', description: 'AI system to match candidates to jobs.', category: 'AI/ML', status: 'OPEN', requiredSkills: ['Python','PyTorch','NLP'], budget: 15000, owner: 'Baalvion R&D', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-4', title: 'Analytics Dashboard', description: 'Dashboard for hiring analytics.', category: 'Web', status: 'COMPLETED', requiredSkills: ['React','Chart.js','Node.js'], budget: 7000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-5', title: 'Notification Engine', description: 'System to send alerts and notifications.', category: 'Backend', status: 'ACTIVE', requiredSkills: ['Node.js','Socket.io','Redis'], budget: 5000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-6', title: 'Team Collaboration Tool', description: 'UI for team project management.', category: 'Web', status: 'OPEN', requiredSkills: ['React','Next.js','Tailwind'], budget: 12000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-7', title: 'Resume Uploader', description: 'Frontend for candidate document upload.', category: 'Web', status: 'ACTIVE', requiredSkills: ['React','Firebase'], budget: 6000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-8', title: 'Campus AI Matching', description: 'AI matching for student placement.', category: 'AI/ML', status: 'OPEN', requiredSkills: ['Python','TensorFlow','Scikit-learn'], budget: 14000, owner: 'Baalvion Campus', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-9', title: 'Offers Module', description: 'Manage job offers in frontend.', category: 'Web', status: 'COMPLETED', requiredSkills: ['React','Node.js'], budget: 4000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] },
  { id: 'proj-10', title: 'Project Milestones Tracker', description: 'Track project milestones and team roles.', category: 'Web', status: 'OPEN', requiredSkills: ['React','Tailwind','Node.js'], budget: 9000, owner: 'Baalvion Labs', currency: 'USD', country: 'Global', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), roles: [] }
];


export const projectMockService: ProjectService = {
  async getProjects(query: TableQuery): Promise<PaginatedResponse<Project>> {
    await delay(500);
    const { page = 1, limit = 10, search, sortBy, sortOrder, filters } = query;
    
    let results = [...mockProjects];

    const searchTerm = filters?.search || search;
    const categoryFilter = filters?.category as string;
    const statusFilter = filters?.status as string;
    const skillFilter = filters?.skill as string;

    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        results = results.filter(p => 
            p.title.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );
    }
    if (categoryFilter) {
        results = results.filter(p => p.category === categoryFilter);
    }
     if (statusFilter) {
        results = results.filter(p => p.status === statusFilter);
    }
     if (skillFilter) {
        results = results.filter(p => p.requiredSkills.includes(skillFilter));
    }
    
    if (sortBy) {
      results.sort((a, b) => {
        const aValue = (a as any)[sortBy];
        const bValue = (b as any)[sortBy];
        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const total = results.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = results.slice(start, end);
    
    return {
        data: paginatedData,
        total,
        page,
        limit,
        totalPages,
    };
  },
  async getProjectById(id: string): Promise<Project | undefined> {
    await delay(200);
    return mockProjects.find(p => p.id === id);
  },
  async updateProjectStatus(id: string, status: ProjectStatus): Promise<Project> {
    await delay(300);
    const projectIndex = mockProjects.findIndex(p => p.id === id);
    if (projectIndex === -1) {
      throw new Error("Project not found");
    }
    mockProjects[projectIndex].status = status;
    return mockProjects[projectIndex];
  }
};
