import { Pathnames } from '@/i18n/routing';
import { FC, SVGProps } from 'react';

export interface Icons {
  id: number;
  name: string;
  icon: FC<SVGProps<SVGElement>>;
}

export type NavLink = {
  title: string;
  href: Pathnames;
};
