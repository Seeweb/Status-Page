import { loadIncidents, loadStatusReport } from '$lib/metrics';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    systems: loadStatusReport(),
    incidents: loadIncidents()
  };
};
