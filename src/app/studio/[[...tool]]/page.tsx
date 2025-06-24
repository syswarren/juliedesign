/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  // Check if we have valid Sanity configuration
  const hasValidConfig = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'demo-project' &&
                        process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!hasValidConfig) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        fontFamily: 'system-ui, sans-serif',
        color: '#333'
      }}>
        <h1>Sanity Studio Not Configured</h1>
        <p>Please set up your Sanity environment variables to access the studio.</p>
        <p>Required variables:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>NEXT_PUBLIC_SANITY_PROJECT_ID</li>
          <li>NEXT_PUBLIC_SANITY_DATASET</li>
        </ul>
      </div>
    );
  }

  return <NextStudio config={config} />
}
