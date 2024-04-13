import 'server-only';
import { config } from './config';
import { createClient, type QueryParams } from '@sanity/client';

interface SanityFetchParams {
  query: string;
  qParams?: Record<string, unknown>;
  tags?: string[];
}

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: 'force-cache',
    next: { tags },
  });
}
