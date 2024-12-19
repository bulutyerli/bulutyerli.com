export const formatLink = (link: string): string => {
  return link.startsWith('/') ? link : `/${link}`;
};
