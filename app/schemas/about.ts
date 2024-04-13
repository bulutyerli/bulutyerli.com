import { baseLanguage } from './localeStringType';

const aboutSchema = {
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'The title of the about me section.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image related to the user.',
    },
    {
      name: 'loki',
      title: 'Loki',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image related to the loki.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeBlock',
      description: 'Description of the project.',
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage?.id}`,
    },
  },
};

export default aboutSchema;
