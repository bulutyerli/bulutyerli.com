export const isActive = (path: string, href: string): boolean => {
  let newHref: string;

  // Check if href contains a hash
  const isHash = href.includes('#');

  if (isHash) {
    newHref = href.slice(1); // Remove the hash
  } else {
    newHref = href;
  }

  return path === newHref;
};
