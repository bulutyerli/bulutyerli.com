import 'server-only';
import { config } from './config';
import { createClient } from '@sanity/client';

interface SanityFetchParams {
  query: string;
  qParams?: Record<string, unknown>;
  tags?: string[];
}

const client = createClient(config);

export async function sanityFetch(params: SanityFetchParams) {
  return client.fetch(params.query, params.qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags: params.tags },
  });
}
