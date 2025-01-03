export const isActive = (path: string, href: string): boolean => {
  let newHref: string;

  // Check if href contains a hash
  const isHash = href.includes('#');

  if (isHash) {
    newHref = href.slice(2); // Remove the / and hash
  } else {
    newHref = href;
  }

  return path === newHref;
};
