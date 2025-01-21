export const isActive = (path: string, href: string): boolean => {
  let newHref: string;

  // Check if href contains a hash
  const isHash = href.includes('#');

  if (isHash) {
    newHref = href.slice(2); // Remove the / and hash
  } else {
    newHref = href;
  }

  const formattedHref = addDashes(replaceTurkishCharacters(newHref));
  const formattedPath = addDashes(replaceTurkishCharacters(path));

  return formattedHref === formattedPath;
};

export const replaceTurkishCharacters = (text: string) => {
  return text
    .replaceAll(' ', '-')
    .replaceAll('ğ', 'g')
    .replaceAll('ü', 'u')
    .replaceAll('ş', 's')
    .replaceAll('ı', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ç', 'c');
};

export const addDashes = (text: string): string => {
  return text.replaceAll(' ', '-').toLowerCase();
};
