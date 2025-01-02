import type { MDXComponents } from 'mdx/types';
import ImageComponent from './components/Mdx/ImageComponent/ImageComponent';
import ProjectDetails from './components/Mdx/ProjectDetails/ProjectDetails';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ImageComponent,
    ProjectDetails,
  };
}
