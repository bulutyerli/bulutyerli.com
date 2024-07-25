import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './app/schemas';
import { presentationTool } from 'sanity/presentation';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  name: 'default',
  title: 'Bulut Yerli',

  projectId: 'e6rcb1iv',
  dataset: 'production',
  basePath: '/studio',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
