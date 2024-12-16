export const formattedLinks = (link: string): string => {
  return link.startsWith('/') ? link : `/${link}`;
};
