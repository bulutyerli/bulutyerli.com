import { useEffect, useState } from 'react';

export default function useActiveSection(
  sectionIds: string[],
  pathName: string,
) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveSection = entry.target.id;
            setActiveSection(newActiveSection);

            // Update the hash in the URL without reloading the page
            if (window.location.hash !== `#${newActiveSection}`) {
              history.replaceState(null, '', `#${newActiveSection}`);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, pathName]);

  return activeSection;
}
