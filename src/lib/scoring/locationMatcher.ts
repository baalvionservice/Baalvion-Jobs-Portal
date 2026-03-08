import type { Candidate, Job } from '@/lib/types';

export function calculateLocationScore(candidate: Candidate, job: Job): number {
    if (job.remoteAllowed) {
        // A more complex system could map candidate country to allowed remote regions.
        // For now, if remote is allowed, we score highly.
        return 100;
    }

    if (candidate.country === job.country) {
        return 100;
    }

    return 40;
}
