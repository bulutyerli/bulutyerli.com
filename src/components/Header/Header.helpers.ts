export const isActive = ({ path, href }: { path: string; href: string }) => {
  let newHref: string;
  const isHash = href.includes('#');

  if (isHash) {
    newHref = href.slice(1);
  }

  return path === newHref;
};
