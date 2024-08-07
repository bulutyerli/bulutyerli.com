import { baseLanguage } from './localeStringType';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

const projectSchema = {
  name: 'projects',
  title: 'Project',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'The title of the project.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image related to the project.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
      description: 'Description of the project.',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'Array of skills used in the project.',
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: 'Link to the GitHub repository of the project.',
    },
    {
      name: 'liveSiteLink',
      title: 'Live Site Link',
      type: 'url',
      description: 'Link to the live site of the project.',
    },
    orderRankField({ type: 'projects' }),
  ],
  preview: {
    select: {
      title: `title.${baseLanguage?.id}`,
    },
  },
};

export default projectSchema;
