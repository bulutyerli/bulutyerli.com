import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './app/schemas';
import { codeInput } from '@sanity/code-input';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export default defineConfig({
  name: 'default',
  title: 'Bulut Yerli',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({ type: 'projects', S, context }),
            S.documentTypeListItem('about'),
            S.documentTypeListItem('blogPost'),
          ]);
      },
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
