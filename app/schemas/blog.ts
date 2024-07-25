import { baseLanguage } from './localeStringType';

const blogSchema = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'The title of the blog post.',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: `title.${baseLanguage?.id}`,
        maxLength: 96,
      },
      description: 'The unique identifier for the blog post URL.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image related to the blog post.',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'localeBlock',
      description: 'Content of the blog post.',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Publication date of the blog post.',
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage?.id}`,
      media: 'image',
    },
  },
};

export default blogSchema;
