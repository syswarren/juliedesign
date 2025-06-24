import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Only create client if we have valid configuration
const hasValidConfig = projectId && dataset && projectId !== 'demo-project'

export const client = hasValidConfig 
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  : null
