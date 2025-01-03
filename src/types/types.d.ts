import { Pathnames } from '@/i18n/routing';
import { FC, SVGProps } from 'react';

export interface Icons {
  id: number;
  name: string;
  icon: FC<SVGProps<SVGElement>>;
}

type StaticPathnames = Exclude<Pathnames, '/case-study/[slug]'>;

export type NavLink = {
  title: string;
  href: StaticPathnames;
};
