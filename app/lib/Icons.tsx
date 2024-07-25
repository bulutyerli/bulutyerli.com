import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoFigma,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoRedux,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiExpress, SiNextdotjs } from 'react-icons/si';
import { Icons } from '../types/types';

const icons: Icons[] = [
  {
    name: 'javascript',
    icon: <BiLogoJavascript />,
  },
  {
    name: 'typescript',
    icon: <BiLogoTypescript />,
  },
  {
    name: 'html',
    icon: <BiLogoHtml5 />,
  },
  {
    name: 'css',
    icon: <BiLogoCss3 />,
  },
  {
    name: 'tailwind',
    icon: <BiLogoTailwindCss />,
  },
  {
    name: 'react',
    icon: <BiLogoReact />,
  },
  {
    name: 'next',
    icon: <SiNextdotjs />,
  },
  {
    name: 'node',
    icon: <BiLogoNodejs />,
  },
  {
    name: 'express',
    icon: <SiExpress />,
  },
  {
    name: 'redux',
    icon: <BiLogoRedux />,
  },
  {
    name: 'github',
    icon: <BiLogoGithub />,
  },
  {
    name: 'figma',
    icon: <BiLogoFigma />,
  },
  {
    name: 'mongo',
    icon: <BiLogoMongodb />,
  },
  {
    name: 'postgre',
    icon: <BiLogoPostgresql />,
  },
];

export default icons;
