import { useRouter } from 'next/navigation';

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

export const handleRoute = (
  pathName: string,
  href: string,
  router: ReturnType<typeof useRouter>,
) => {
  if (pathName === '/') {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    router.push(`/${href}`);
  }
};
