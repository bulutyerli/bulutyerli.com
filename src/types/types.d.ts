export interface Icons {
  name: string;
  icon: React.ReactNode;
}

export type NavLink = {
  title: string;
  href: '/about-me' | '/contact' | '/blog';
};
