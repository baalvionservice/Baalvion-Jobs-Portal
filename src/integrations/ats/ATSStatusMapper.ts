
import { ApplicationStatus } from '@/types';
import { atsConfig } from './mockATSData';

/**
 * Maps an internal application status to the corresponding status for a specific ATS provider.
 * @param internalStatus - The status from the Baalvion system.
 * @param providerName - The name of the target ATS provider.
 * @returns The equivalent status string for the external ATS.
 */
function toATS(internalStatus: ApplicationStatus, providerName: string): string {
  const mapping = atsConfig.statusMappings[providerName]?.internalToExternal;
  if (mapping && mapping[internalStatus]) {
    return mapping[internalStatus];
  }
  // Fallback to a default or the internal status itself
  return 'in_review';
}

/**
 * Maps a status string from an external ATS back to a standard internal ApplicationStatus.
 * @param externalStatus - The status string received from the ATS webhook or API.
 * @param providerName - The name of the source ATS provider.
 * @returns The equivalent internal ApplicationStatus.
 */
function toInternal(externalStatus: string, providerName: string): ApplicationStatus {
  const mapping = atsConfig.statusMappings[providerName]?.externalToInternal;
  if (mapping && mapping[externalStatus]) {
    return mapping[externalStatus];
  }
  // Fallback if no specific mapping is found
  return 'UNDER_REVIEW';
}

export const atsStatusMapper = {
  toATS,
  toInternal,
};
