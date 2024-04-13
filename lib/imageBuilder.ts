import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
import { config } from './config';

const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: object) {
  return builder.image(source);
}
