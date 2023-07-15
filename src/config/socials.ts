import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { Social } from './types';

export const socials: Array<Social> = [
  {
    name: 'GitHub',
    url: 'https://github.com/petertonysmith94/',
    icon: GithubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/petertonysmith/',
    icon: LinkedInIcon
  },
]