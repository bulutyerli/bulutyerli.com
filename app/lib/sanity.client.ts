import 'server-only';
import { config } from './config';
import { createClient } from '@sanity/client';

const client = createClient(config);

export async function sanityFetch({ query, qParams, tags }) {
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}
